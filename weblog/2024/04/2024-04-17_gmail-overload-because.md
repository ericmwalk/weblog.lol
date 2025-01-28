---
publish: "false"
date: 2024-04-17 20:46:06
permalink: /2024/04/17/gmail-overload-because
url: https://ericmwalk.blog/2024/04/17/gmail-overload-because.html
---

# Gmail Overload - Because of Calendar Invites and Document Shares

For any of you working somewhere that uses G-Suite products you might be able to relate to my issues. To preface, working in all sorts of time zones are great to keep things moving in a smaller team. However, the days you wake up with 60+ unread emails in your inbox of which 95% are probably just calendar invitations (and corrections to times) and document shares you might become slightly frustrated. Today was that day for me and it broke the camel’s back as you would say. I was done with having those types of items cluttering all of the other normal emails that are mostly more time critical things to address or action in the morning for me. So I decided to do some digging tonight to see how best I could filter out these offending emails so I could get to what I wanted.

I was actually shocked that I found fairly quickly a filter I could create using the following:

`subject:("invitation" OR "accepted" OR "rejected" OR "updated" OR "canceled event" OR "declined" OR "proposed") when where calendar who organizer`

So I use that and dump them in a folder (still marked as unread but skipping the inbox) titled Meetings.

After that was accomplished rather quickly I turned to the Google Documents (Sheets, Slides, Docs) share issue. It isn't that I don't want to go though them but sometimes they clutter my inbox before I am ready to deal with them on a quick pass. So I took to searching again but this was not as fruitful as I couldn't find exactly what I wanted so I pieced this filter together by using common terms I kept noticing in the From field. The results are as follows:

`From: "(via Google Drive)" OR "(via Google Slides)" OR "(via Google Docs)" OR "(via Google Sheets)"`

Again, it isn't that I wanted them deleted or all marked unread for no reason so I just dump them into a Documents folder and I can dive into them later in my day.

In my search for the second example, I did find an easier way to do the first filtering method for calendar invites that was burried in the [Google Workspace Learning Center](https://support.google.com/a/users/answer/11387073?sjid=7810924241319776005-NC&visit_id=638489925966315276-713929201&rd=1#filter_calendar&zippy=%2Clearn-how) . I have pulled the relevant example below. I ended up changing mine to this as it seems a little cleaner and should address outside calendar items too.

>1. Open [Gmail](https://mail.google.com/).
>2. In the search box at the top, click Show search options
>3. In the **To** field, enter your email address.
>4. Next to **Has the words**, enter **invite.ics OR invite.vcs**.
>5. Check the **Has attachment** box.
>6. Click **Create filter**.
>7. Check the **Apply the label** box and choose a label to automatically sort incoming event response messages.
>8. Check the **Skip the Inbox (Archive it)** box to move response messages out of your inbox. Don’t worry, you can still view them later if needed.
>9. Click **Create filter**.
