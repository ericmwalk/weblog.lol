---
publish: "true"
date: 2025-04-01T10:04:00
tags: 
url: https://ericmwalk.blog/2025/04/02/on-this-day-for-webloglol.html
---

# On this day for weblog.lol

This is a delayed write up, or should I say I have been testing it for the past couple of weeks before I shared it. First off I want to ~~blame~~ thank [Jason](https://grepjason.sh) for the shove in the right direction on trying to create my own script for weblog.lol instead of just complaining that I have the "On this day" link on my Micro.blog site and it sure would be nice if I had it on my currently mirrored weblog.lol site. He really just gave me the quick answer of "I am sure it is possible" and there I went down the rabbit hole to figure out how to make it possible with my limited technical knowhow as well as well as various GPT's at my disposal.

*If you just want the script click her to go directly to the bottom of this page or feel free to read though the short story.*

I will say the first crack I had at this was much easier than I thought as I dug into what[Jonathan LaCour](https://cleverdevil.io/) did to create [Micro Memories](https://github.com/cleverdevil/micromemories) for his wife that was specific to Micro.blog.

However, with that as a baseline I was able to tweak his code in some cases and rewrite other parts as the weblog.lol was structured differently on the Archives page that is standard.

My first version worked great but only listed the links to the post, which really could have done the trick but I really liked how the version Jonathan created actually had the full posts show up so after a little more hacking away I was able to figure that out as well as making sure that the title would or wouldn't show up and where things were placed.

All, in all I was happy enough with the results now and using it that I figured I would share it out and or feel free to take a [peek at mine to see how it looks](https://runs.lol/on-this-day).

So there you have it, now if you have a weblog.lol site and have been wanting a "On this Day" link you can snag this script or link it as described below and have the same.

***
It is is actually simple because for now you can just create a new page in weblog.lol and put the code snip below in there and save it. This is assuming you are using a standard /archive page as well because it does pull information from that in order to get the on-this-day feature.

``` 
<div id="on-this-day">
Loading...
</div>

<script src="https://scripts.brebs.net/on-this-day.js"></script>

</body>
```

For the full script if something isn't working or you want to modify it to fit your own need you can find it [here](https://ericmwalk.paste.lol/on-this-day).
