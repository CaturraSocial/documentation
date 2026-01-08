---
hidden: true
noRobotsIndex: true
icon: book-open
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
---

# Changelog

## V26.01.03

#### What's Changed

* Redesigned Our Dashboard
* Added Dashboard Profile
* Redesigned Oauth Page
* Implemented Settings Page

***

## V25.12.06

#### What's Changed

* Homepage, Register and Login pages have had a huge redesign
  * We are working towards updating our dashboards to follow our new design choices, check out [dev.caturra.app](https://dev.caturra.app/) as we will be testing them out over there first •⩊•
* We've updated the API endpoint URL for likes, check out [/post/like](https://docs.caturra.social/api/v1/endpoints/post#like-unlike)&#x20;
* We've updated the API endpoint URL for follow/unfollow, check out [/user/follow](https://docs.caturra.social/api/v1/endpoints/user#follow-unfollow)
* We've updated the API endpoint for Posts to include the number of likes the post has
* We've updated the API endpoint for Users to include the number of followers and how many they are following
* We've added a new endpoint to allow you to easily access the Users posts [/user/posts](https://docs.caturra.social/api/v1/endpoints/user#get-user-posts)
* We've added a new endpoint to allow you to easily access the Replies of any post [/post/replies](https://docs.caturra.social/api/v1/endpoints/post#get-post-replies)
* We did an oops and now tokens really expire ฅ^.\_.^ฅ

***

## V25.10.27

#### What's Changed

* Added avatar to getUser
  * We added avatars to our getUser requests. This currently gives you a Gravatar URL - We plan on building our own avatar and banner system in the future ◕⩊◕

***

## V25.10.24

#### What's Changed

* Updated and fixed `Get` user&#x20;
  * We did an oopsie and didn't follow our own documentation - we now follow it •⩊•
* Fix localhost redirects not working
  * When using localhost as your redirect URI on an application, it would redirect you back to us - we now appropriately redirect you back to your local environment instead of holding you hostage ദ്ദി（• ˕ •マ.ᐟ
* Forms retain data if there is a validation error
  * Instead of clearing the data within a form when you input the wrong password or email, we now prefill that old data - not your password tho ฅ^•ﻌ•^ฅ
* Added Nullable to URI validation
  * Sometimes you don't want a URI, so we now allow you to /ᐠ - ˕ -マ

***

## V25.10.07

Initial Release.
