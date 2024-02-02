Type: Template
Title: Page Template

<!DOCTYPE html>
<html lang="en">
<head>
<title>{weblog-title}{separator}{post-title}</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
{feeds}
<style>
@import url('https://static.omg.lol/type/font-honey.css');
@import url('https://static.omg.lol/type/font-lato-regular.css');
@import url('https://static.omg.lol/type/font-lato-bold.css');
@import url('https://static.omg.lol/type/font-lato-italic.css');
@import url('https://static.omg.lol/type/font-md-io.css');
@import url('https://static.omg.lol/type/fontawesome-free/css/all.css');

:root {
	--foreground: #212529;
	--background: #f8f9fa;
	--link: #0b7285;
	--accent: #868e96;
	--articleBG: #313437;
}

@media (prefers-color-scheme: dark) {
	:root {
		--foreground: #eee;
		--background: #222;
		--link: #99e9f2;
		--accent: #ced4da;
	}
}

* {
	box-sizing: border-box;
}

body {
	font-family: 'Lato', sans-serif;
	font-size: 100%;
	color: var(--foreground);
	background: var(--background);
}
	
nav {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: var(--articleBG);
    border-radius: 0.5em;
    font-family: 'VC Honey Deck', sans-serif;
    line-height: 100%;
}

nav li {
    list-style-type: none;
}

nav ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0;
    margin: 10px 15px 10px 15px;
    align-content: center;
}

h1, h2, h3, h4, h5, h6 {
	font-family: 'VC Honey Deck', serif;
	margin: 1rem 0;
}

p, li {
	line-height: 160%;
}

header, main, footer {
	max-width: 50em;
	margin: 3em auto;
	padding: 0 0.5em;
}

header {
	margin-top: 3em;
}

header h1 { 
	text-align: center;
}

header h1 a:hover { 
	text-decoration: none;
}

footer p {
	margin-top: 5em;
	font-size: 90%;
	text-align: center;
}

a:link { color: var(--link); text-decoration: none; }
a:visited { color: var(--link); text-decoration: none; }
a:hover { color: var(--link); text-decoration: underline; }
a:active { color: var(--link); text-decoration: underline; }

nav li a:link, nav li a:visited {
    color: white;
}

.post-info, .post-tags {
	font-size: 85%;
	color: var(--accent);
	text-align: left;
}

.post-info i:nth-child(2) {
	margin-left: .75em;
}

.post-tags {
	padding-bottom: 1em;
}

.tag {
	background: var(--accent);
	color: var(--background) !important;
	padding: .3em .4em;
	margin: .8em 0 0 .4em;
	border-radius: .5em;
	text-decoration: none;
	display: inline-block;
}

hr {
	border: 0;
	height: 1px;
	background: #333;
	margin: 2em 0;
}

code {
	padding: .2em .3em;
	border: 1px solid var(--accent);
	white-space: pre-wrap;
	word-wrap: break-word; 
}

pre, code {
	font-family: 'MD IO 0.4';
	font-size: 90%;
}

pre code {
	background:  #000;
	color:  #eee;
	display: inline-block;
	padding: 1em;
	white-space: pre-wrap;
	word-wrap: break-word;   
}

table {
	border-collapse: collapse;
}

td, th {
	padding: .75em;
	text-align: left;
	border: 1px solid var(--accent);
}
	
.weblog-title a {
	text-decoration: none;
	color: var(--foreground);
}

img {
	display: block;
	width: auto;
	height: auto;
	max-width: 100%;
	border-radius: 0.5em;
}

div.table-container {
	display: flex; 
	flex-direction: row;
}

div.table-cell {
	padding-right: 1em;
	padding-bottom: 1em;
}

div.weblog-info {
	display: flex;
        flex-direction: row;
        gap: 2rem;
        margin-top: 7rem;
        padding: 1rem 2rem 0.75rem;
	background-color: var(--articleBG);
	border-radius: 0.5em;
}

div.weblog-info div.item {
	flex: 1;
}

@media only screen and (max-width: 750px) {
	div.weblog-info {
		display: flex;
		flex-direction: column;
		gap: 0;
	}
	div.weblog-info div.item {
		flex: 1;
	}

	div.table-container {
		display: flex; 
		flex-direction: column;
gap: 0;
	}
}

div.weblog-info ul {
	 margin-left: 1.2rem;
		padding-left: 0;
}

div.weblog-info div.statuslol_emoji_container {
	display: none;
}

.statuslol_content p {
  line-height: 100%;
  margin-bottom: 0.5em;
}

.statuslol_time {
    padding-left: 0.5em;
    font-size: 0.8em;
}

h3.recent-posts:before {
	content: "\f1da";
	font: var(--fa-font-solid);
	margin-right: 0.8rem;
}

h3.more-posts:before {
	content: "\f0ca";
	font: var(--fa-font-solid);
	margin-right: 0.8rem;
}

h3.current-status:before {
	content: "\f0a1";
	font: var(--fa-font-solid);
	margin-right: 0.8rem;
}

h3.about-this:before {
	content: "\f059";
	font: var(--fa-font-solid);
	margin-right: 0.8rem;
}

article > h1 {
	padding-bottom: 0.5em;
}

article > ol {
	margin-left: 0.5em;
}

</style>
</head>
<body>

<header>
	<h1 class="weblog-title"><a href="/"><i class="fa-regular fa-pen-to-square"></i> {weblog-title}</a></h1>
	{navigation}
</header>

<main>

<article>
	{body}
</article>

<div class="weblog-info">
	<div class="item">
		<h3 class="current-status">status</h3>
		<i><script src="https://status.lol/ericmwalk.js?time&link"></script></i>
		<br\>
		<h3 class="contact-me">contact me: <a href="mailto:ericmwalk@omg.lol" title="Email me"> <i class="far fa-envelope"> </i></a>&nbsp;<a rel="me" href="https://social.lol/@ericmwalk" title="My Mastodon instance."> <i class="fa-brands fa-fw fa-mastodon"></i> </a></h3>
		<h3 clsss="about-this">about this: </h3>
			<p><i>Trying to give this a little more of a go in 2024. Don't expect much but maybe expect something... 🤷‍♂️</i></p>
		<br\>
	</div>
	<div class="item">
		<h3 class="recent-posts">recent posts</h3>
		{recent-posts}
		<br\>
		<h3 class="more-posts">more posts</h3>
		<ul>
			<li><a href="/archive"><i class="fa-solid fa-box-archive"></i> Full Archive</a></li>
			<li><a href="/random"><i class="fa-solid fa-dice"></i> Random Post</a></li>
		</ul>
		<br\>
	</div>
</div>

</main>

<footer>
	<p>Made with <a href="https://home.omg.lol/" title="Love by prami at omg.lol"><i class="fa-solid fa-heart"></i></a> at <a href="https://weblog.lol">weblog.lol</a> &copy; 2022 - {year}</p>
</footer>

</body>
</html>
