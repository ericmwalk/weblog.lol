---
title: Initial Thoughts on Obsidian Publish
publish: "true"
date: 2024-12-18
tags:
  - Obsidian
permalink: 2024/12/17/initial-thoughts
url: 
---

# Initial Thoughts on Obsidian Publish

Now that I pretty much have a working example of Obsidian Publish going and have changed around some of the settings and CSS even to make it look like it is right now here are my initial thoughts:

### + Plus
* I actually really like having this right inside where I have been taking notes and other things that I can quickly publish something from that images and all with no fuss, the note just shows up online.
* You are able to point your own domain or subdomain to Obsidian Publish. I did it the easy way by using Cloudflare since that was their example as I couldn't quickly tell the easiest path with my own provider but I am sure there is a way. Seems to work fine with the Free version of Cloudflare so no issues.
* Customize the look and feel, I just left it as default right away and they have a couple simple things you can change right in the Obsidian Publish screen. There is more advanced ways to do it as well modifying CSS and after I gave it a go I did start searching GITHub and found a handful of sites that published their CSS as a good example to follow and use. Ultimatly, after all of my work creating my own publish.css I then found [Minimal.Guide](https://minimal.guide/publish/download) had a good simple example of a Dracula theme *(and others)* I wish I would have found earlier.
### - Minus
* Lack of RSS support, yes there is an RSS link for this site but there is not really any of the information you would want like date another things. It is really just a breakdown of note titles from what I can tell.
* You have to keep it in the root of your Obsidian Vault, or if you don't you will leave you website pointing to /folder/notes. This would not be a huge deal if I used this whole Vault for just my Obsidian Publish site but the benefits I would enjoy keeping is being able to just have all things in one spot and then one Folder that was really a mirror of my site which I can move things in and out of. There is some chatter about in in the [Forum](https://forum.obsidian.md/t/obsidian-publish-set-sub-folder-as-site-root/64272) so maybe this will change someday but I get why it probably is the way it is right now.
* Modify the CSS of the site is possible by use of the [publish.css](https://help.obsidian.md/Obsidian+Publish/Customize+your+site) file you need to create in the root of your site, but you can't edit it in Obsidian. So you it is burried in your vault system folder and you have to modify it there but then still go though the publish commands in obsidian to get it updated. Slightly clunky when you are testing things out but after you get it set I understand how then it is just in the background. 


Below are a couple of Sites using Obsidian Publish I stumbled upon as I was figuring things out and they also have their publish.css and publish.js on GitHub:

| Site                                              | GitHub                                                                                           |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [Mister-Chad](https://mister-chad.com/)           | [Chad-Bennett](https://github.com/chad-bennett/obsidian-publish-css)                             |
| [JordanTheITGuy](https://jordantheitguy.com/Home) | [JordanTheITGuy](https://github.com/JordanTheITGuy/WebsiteHelpers/commits?author=JordanTheITGuy) |
| [Joschuasgarden.com](https://joschuasgarden.com/) | [Selfire1](https://github.com/selfire1/obsidian-publish-css)                                     |
| [Wormwood Saga](https://story.wormwoodsaga.com/)  | [Isaac-Tait](https://github.com/Isaac-Tait)                                                      |
