---
icon: telescope
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: false
---

# Scopes

This is a simple list of ALL the scopes we accept for tokens and applications. When a scope is applied to a token, it has permission to obtain information or take a specific action.

<table><thead><tr><th>Name</th><th width="217">Scope</th><th>Description</th></tr></thead><tbody><tr><td>User Get</td><td><mark style="color:yellow;"><code>user.get</code></mark></td><td>Get the user's data like Username, Display_name and bio.</td></tr><tr><td>User Email</td><td><mark style="color:yellow;"><code>user.email</code></mark></td><td>Allows you to get the user's email within the <mark style="color:yellow;"><code>user.get</code></mark>.</td></tr><tr><td>User Edit</td><td><mark style="color:yellow;"><code>user.edit</code></mark></td><td>Allows you to edit the users data like Username and Display_name.</td></tr><tr><td>User Follow</td><td><mark style="color:yellow;"><code>user.follow</code></mark></td><td>Allows you to follow another user.</td></tr><tr><td>User Get Followers</td><td><mark style="color:yellow;"><code>user.followers.get</code></mark></td><td>Allows you to get the user's followers list.</td></tr><tr><td>User Get Following</td><td><mark style="color:yellow;"><code>user.following.get</code></mark></td><td>Allows you to get the user's following list.</td></tr><tr><td>Post Get</td><td><mark style="color:yellow;"><code>post.get</code></mark></td><td>Get the user's post data like content and likes.</td></tr><tr><td>Post Send</td><td><mark style="color:yellow;"><code>post.send</code></mark></td><td>Allows you to send a post on the user's behalf.</td></tr><tr><td>Post Edit</td><td><mark style="color:yellow;"><code>post.edit</code></mark></td><td>Allows you to edit a user's posts.</td></tr><tr><td>Post Delete</td><td><mark style="color:yellow;"><code>post.delete</code></mark></td><td>Allows you to delete a user's posts.</td></tr><tr><td>Post Like</td><td><mark style="color:yellow;"><code>post.like</code></mark></td><td>Allows you to like a post.</td></tr><tr><td>Reply Get</td><td><mark style="color:yellow;"><code>reply.get</code></mark></td><td>Get the user's reply data like content, likes and parent post.</td></tr><tr><td>Reply Send</td><td><mark style="color:yellow;"><code>reply.send</code></mark></td><td>Allows you to send a reply on the user's behalf.</td></tr><tr><td>Reply Edit</td><td><mark style="color:yellow;"><code>reply.edit</code></mark></td><td>Allows you to edit a user's replies.</td></tr><tr><td>Reply Delete</td><td><mark style="color:yellow;"><code>reply.delete</code></mark></td><td>Allows you to delete a user's replies.</td></tr><tr><td>Reply Like</td><td><mark style="color:yellow;"><code>reply.like</code></mark></td><td>Allows you to like a reply.</td></tr><tr><td>Feed Get</td><td><mark style="color:yellow;"><code>feed.get</code></mark></td><td>Allows you to get a curated list of posts designed for the user.</td></tr><tr><td>Feed Public</td><td><mark style="color:yellow;"><code>feed.public</code></mark></td><td>Allows you to get a list of random posts.</td></tr></tbody></table>

## Notes:

* You must have the <mark style="color:yellow;">`user.get`</mark> scope to use any of the other user scopes, this also goes for the post and reply scopes
