---
title: Using Obsidian for Micro.blog
publish: "true"
date: 2025-01-21
tags: Obsidian
permalink: 2025/01/21/using-obsidian-for-microblog
url: https://ericmwalk.blog/2025/01/21/using-obsidian-for-microblog.html
---
I was doing my yearly backup of my Micro.blog site as well as other things I have online just to pull them down and store them on my local storage. As I was curious about what was in the zip file, I was reminded that all of the posts are in Markdown, and then I got this crazy idea: why not just load all these Micro.blog Markdown files into my Obsidian vault? Mostly because for almost the last 10 months, I have been using Obsidian for the start of all my posts and then publishing them using Micro.Publish. So I decided to do exactly that, and now I have a full backup in Obsidian, which is really nice.

Honestly, it was too easy to just get everything in here, and in the Properties part of the file, it had everything I really would need in order to make changes locally and use Micro.Publish to update old posts as part of my blog gardening from time to time. Well, it was all there, but some of the information needed to be modified. Seeing how I didn't want to go to each file and update things, I turned to my friend AI to assist in this process and create a Python script to do all the work for me. This is where AI really shines, as I figured out what I needed the end results to look like and then just asked with an example of what it is now and what it needs to look like. More specifically, the changes I wanted to make in each file were as follows:

1. create a "permalink" property based off of the url: one but remove the .html at the end
2. for the "url" property append https://ericmwalk.blog before it so it would actually link to my blog (this is needed to have Micro.Publish update the right file)
3. Replace the Categories property with Tag
4. Add a "title" property for anything that doesn't have a title and leave it blank
5. Add a Publish property with the default setting of "false" as this is something that tells Obsidian Publish (if you are thinking of using that ever) if you want it published or not.
6. Remove all other properties that are not needed for the file to be able to be published again (e.g., images, photos, lastmod, guid, post_id)
	* *Now maybe some of those things could come in handy at some point in the future but my reason for removing them is if I use Obsidian as my soruce of truth now these things do not get published or matter if I change them if I am updating the file.*
7. Reorder the Properties to just make it more pleastnt to my eyes in the following order: Title, Publish, Date, Tags, Permalink, and URL 

The good thing is AI was able to do all of this heavy lifting for me and fix the files as described above. I appreciate how it took a tedious task that I could have done to each file and just based on my trial and error of getting the right output (~20 min), I was able to get something that went through all the files and the properties section is how I want it.

The only downside of my overall approach is that I did it in 3 steps mostly because I didn’t want to start back over, and I realized after a couple of things changed, I wanted more as well as cleaning up some of the properties section. The end results were these three files below if anyone else wants to give it a go, but I would probably test small if you are actually going to use them.

* Steps 1-5 [Micro.blog File Edit for Obsidian - Update Properties](https://paste.lol/ericmwalk/mb_obsidian_update_properties)
* Step 6: [Micro.blog File Edit for Obsidian - Remove Unused Properties](https://ericmwalk.paste.lol/mb_obsidian_remove_properties)
* Step 7: [Micro.blog File Edit - Reorder Properties for Personal Preference](https://home.omg.lol/address/ericmwalk/pastebin/mb_obsidian_reorder_properties)

*Maybe if I have time at some point I will put it all in one file but the first one is really the most important in my opinion. I am also wondering if about making folders only by month instead of month and day as I typically don't post more than 1x per day anyways. So I might need another script to help with this lifting next.* 