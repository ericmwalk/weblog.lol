document.addEventListener('DOMContentLoaded', function() {
  const onThisDayContent = document.getElementById('on-this-day');
  const today = new Date();
  const baseUrl = window.location.origin; // Get the base URL of your site

  fetch('/archive')
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const entries = doc.querySelectorAll('ol li');
      
      const onThisDayEntries = Array.from(entries).filter(entry => {
        const dateText = entry.querySelector('i').textContent;
        const entryDate = new Date(dateText);
        return entryDate.getMonth() === today.getMonth() && entryDate.getDate() === today.getDate();
      });
      
      if (onThisDayEntries.length > 0) {
        Promise.all(onThisDayEntries.map(entry => {
          const link = entry.querySelector('a');
          const url = baseUrl + link.getAttribute('href');
          const title = link.textContent.split(' - ')[0].trim();
          const date = entry.querySelector('i').textContent;
          
          return fetch(url)
            .then(response => response.text())
            .then(postHtml => {
              const postDoc = parser.parseFromString(postHtml, 'text/html');
              const content = postDoc.querySelector('article').innerHTML;
              return `<article>
                <h2><a href="${url}">${title}</a></h2>
                <time>${date}</time>
                <div class="post-content">${content}</div>
              </article>`;
            });
        }))
        .then(formattedEntries => {
          onThisDayContent.innerHTML = formattedEntries.join('');
        });
      } else {
        onThisDayContent.textContent = 'No posts for today in previous years.';
      }
    })
    .catch(error => {
      console.error('Error fetching archive:', error);
      onThisDayContent.textContent = 'Error loading on-this-day content.';
    });
});
