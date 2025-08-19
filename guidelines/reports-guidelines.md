---
description: >-
  This page introduces our new Report system for Users, Posts, and Applications.
  This page is primarily for developers who provide a service to other users
  using our backend service.
layout:
  width: default
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
  metadata:
    visible: true
---

# Reports Guidelines

Developers should give users simple ways to report users or posts on their platforms, that could be a simple report button on the post or users page or within a context menu.\


<div><figure><img src="../.gitbook/assets/brave_PcsGK8LmMG.png" alt="" width="401"><figcaption><p>Button Example</p></figcaption></figure> <figure><img src="../.gitbook/assets/image (6).png" alt=""><figcaption><p>Context Menu Example</p></figcaption></figure></div>

When sending a user to the report page, make sure to send them to the correct URL.\
For user reports, send them to `/report/user/UUID` \
For post reports, send them to `/report/post/UUID` \
Replace the `UUID` of the user or post that wants to be reported\
\
To help make the user experience easier, we have provided a way for developers to redirect the user back to your site with a simple `?redirect_uri=` to the end of the URL, and once the user submits the report, they will be sent to the page you append to this.
