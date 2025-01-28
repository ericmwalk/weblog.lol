---
publish: "false"
date: 2024-05-28 20:48:09
tags: "Running"
permalink: /2024/05/28/json-to-rss
url: https://ericmwalk.blog/2024/05/28/json-to-rss.html
---

# JSON to RSS for Micro.blog

This started out long ago from a post I saw from Sven Dahlstrand ([@sod](https://micro.blog/sod)) where he had posted or replied to a post that he created a JSON feed that included at the bottom of each post where you could [reply in Micro.blog](https://micro.blog.via.dahlstrand.net/). This was a great news for me as I got to the point where I like to catch up every now and then on what is going on in my Timeline of Micro.blog but with out some sort of sync I wanted everything to just live in my RSS reader of choice. However, I was quickly sad that my current RSS process / application (*FreshRSS*) did not support JSON feeds.

So I turned to searching various rabbit holes on the internet until I found what I was looking for where you could hardcode a JSON feed into a PHP script (*note you have to have this running on your own server*) and then it would give me back a RSS feed. This was a great start and I appreciate all the help I found from the Dave Jones and his [jsonfeed2rss.php](https://gist.github.com/daveajones/be26f5ca9cb7559d0c33549b53323770) script. However, it was missing the crucial part I now wanted thanks to Sven where I could actually click on some sort of link and get back to the Micro.blog post where I could leave a reply.

So I went to hacking together from what I could figure out how to get an JSON feed from Micro.blog to somehow give me a link to where I could get back and leave a reply if I wanted. I was able to figure it out and have been running that v1.0 since back in March 2023. The only downside was that I was hardcoding my username in the script so I couldn't really share anything out at that point. Also, I found out the discovery feed was a JSON feed too but I couldn't quite figure out how to get that to work either.

So I finally took the time to get the Discovery Feed to work not only the main one but also the emoji specific searches. However, I was still kind of stuck at using multiple copies of the script as I was still hard coding it. Easy enough solution, more digging and figuring out how to easily **hack*** together a passthrough so if anyone wanted to use it they could by just including the old get at the end of a link.

The only catch is you have to have the PHP script on a web server somewhere. If you are interested or find yourself in need of a JSON to RSS script links to both version are below. Also, the list to find available Micro.blog RSS and JSON feeds is included as well.

**Versions of my Hacked together json2rss Script**
- [v1.0 - Hardcoded user names in the script](https://paste.lol/ericmwalk/mb_json2rss_v1.php)
- [v2.0 - Allowing the pass through of username, discovery, or emojis](https://ericmwalk.paste.lol/mb_json2rss.php)
- [v2.0 GitHub - Same as above but on GitHub 🤷‍♂️](https://gist.github.com/ericmwalk/c82cf3f0f2ac83ec82f2e7520e8149df)

**Micro.blog Support
- [RSS and JSON Feeds](https://help.micro.blog/t/feeds/94)

*05/24/2024 Update: I am going to write a little bit more on this topic I think as rereading it again as I just hit publish I think I could expand more but I wanted to keep this article intact. Since my phone issue (self inflicted last week) I have started really doubling down on only using the RSS side to consume and post to Micro.blog. More on that in another week.*
