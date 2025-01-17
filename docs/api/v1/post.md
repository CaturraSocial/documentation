---
icon: envelopes-bulk
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

# Post

So many changes will be made here as we perfect the wording of posts and replies and how they interact with one another.

### Get Post

<mark style="color:blue;">`GET`</mark> `/post/{UUID}`

{% tabs %}
{% tab title="200" %}
```json
{
    "uuid": "string",
    "parent": "string",
    "author": "string",
    "content": "string",
    "from": "string",
    "lock": "boolean",
    "replies": {"json"}
}
```
{% endtab %}
{% endtabs %}

### Send Post

<mark style="color:orange;">`PUT`</mark> `/post`

| Name    | Type    | Notes                 |
| ------- | ------- | --------------------- |
| content | String  | Max 500 Characters    |
| lock    | Boolean |                       |
| from    | String  | Can be left as `null` |
| parent  | String  | read about Replies    |

{% tabs %}
{% tab title="200" %}
```json
{
    "uuid": "string",
    "parent": "string",
    "post": {"json"}
}
```
{% endtab %}
{% endtabs %}

