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

## V25-10-24

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

## V25-10-07

Initial Release.
