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

<table><thead><tr><th>Name</th><th width="217">Scope</th><th>Description</th></tr></thead><tbody><tr><td>User Get</td><td><code>user.get</code></td><td>Get the user's data like Username, Display_name and bio.</td></tr><tr><td>User Email</td><td><code>user.email</code></td><td>Allows you to get the user's email within the <code>user.get</code>.</td></tr><tr><td>User Edit</td><td><code>user.edit</code></td><td>Allows you to edit the users data like Username and Display_name.</td></tr><tr><td>User Follow</td><td><code>user.follow</code></td><td>Allows you to follow another user.</td></tr><tr><td>User Get Followers</td><td><code>user.get.followers</code></td><td>Allows you to get the user's followers list.</td></tr><tr><td>User Get Following</td><td><code>user.get.following</code></td><td>Allows you to get the user's following list.</td></tr><tr><td>Post Get</td><td><code>post.get</code></td><td>Get the user's post data like content and likes.</td></tr><tr><td>Post Send</td><td><code>post.send</code></td><td>Allows you to send a post on the user's behalf.</td></tr><tr><td>Post Edit</td><td><code>post.edit</code></td><td>Allows you to edit a user's posts.</td></tr><tr><td>Post Delete</td><td><code>post.delete</code></td><td>Allows you to delete a user's posts.</td></tr><tr><td>Post Like</td><td><code>post.like</code></td><td>Allows you to like a post.</td></tr><tr><td>Reply Get</td><td><code>reply.get</code></td><td>Get the user's reply data like content, likes and parent post.</td></tr><tr><td>Reply Send</td><td><code>reply.send</code></td><td>Allows you to send a reply on the user's behalf.</td></tr><tr><td>Reply Edit</td><td><code>reply.edit</code></td><td>Allows you to edit a user's replies.</td></tr><tr><td>Reply Delete</td><td><code>reply.delete</code></td><td>Allows you to delete a user's replies.</td></tr><tr><td>Reply Like</td><td><code>reply.like</code></td><td>Allows you to like a reply.</td></tr><tr><td>Feed Get</td><td><code>feed.get</code></td><td>Allows you to get a curated list of posts designed for the user.</td></tr><tr><td>Feed Public</td><td><code>feed.public</code></td><td>Allows you to get a list of random posts.</td></tr></tbody></table>

### Notes:

* You must have the `user.get` scope to use any of the other user scopes, this goes for the post and reply scopes
