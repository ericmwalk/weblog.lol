---
title: Obsidian Plugin - Linter
publish: "true"
date: 2025-02-11 8:48
tags: Obsidian
url: 
---

In my quest updating old blog posts that I have dumped all into Obsidian I found a great plugin called [Linter](https://github.com/platers/obsidian-linter). What it says it does is as follows:

	The [Linter is an Obsidian.md](https://platers.github.io/obsidian-linter/) plugin that is designed to help keep your notes in a more uniform pattern. It is designed to allow the user to specify which rules and settings to use so that they can try to make their notes as uniform as possible.
	This includes, but is not limited to, rules that affect:
	* YAML frontmatter
	* Markdown headings
	* Github flavored footnotes
	* General markdown content
	* Spacing
	* Pasting content within the app

For me however, I have really only used it to help for a small use case. It has helped to keep some more structure around the YAML items, specifically tags as my tags were a mess as I have gone though this process. I am not sure how some had quotes around it others didn't, some had spaces in the Tag names and others didn't as well. However, the really nice thing it would do in the tags rehlm would be to take it from a multiple line tags that started with dashes to a single line with commas. I probably don't use as many tags theses days for posts so it isn't as big of a deal when just a single tag. However, some of my older ones had multiple and caused a lot of issues when updating older posts. 

Finally, I found a good use of the setting in Linter to add a blank line after YAML.  This as small of a thing as it is, made it that much simpler as I have also been pushing all of my posts to weblog.lol and early on in the process I found if I didn't have that blank line it would cut off the first part of my post when GitHub processed the file[^1].

[^1]: Quick note on that processing I have spent a lot of time fixing the weblog.lol processing script in GitHub to do a lot of things and in hindsight I should have just had it take care of some of these issues like the tags and the return after the YAML line. However, for now I am going to just stick with using Linter as it does what it needs to and helped clean up my mess of posts. Maybe ones Neato is published I will reconsider as I might need to figure out how that all works.


