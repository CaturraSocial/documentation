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

#### Scopes:

> <mark style="color:yellow;">`post.get`</mark>

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

### Update Post

<mark style="color:purple;">`PATCH`</mark> `/post/{UUID}`

| Name    | Type    | Notes              |
| ------- | ------- | ------------------ |
| content | String  | Max 500 Characters |
| lock    | Boolean |                    |

{% tabs %}
{% tab title="200" %}
```json
{
    "uuid": "string",
    "post": {"json"}
}
```
{% endtab %}
{% endtabs %}

### Delete Post

<mark style="color:red;">`DELETE`</mark> `/post/{UUID}`

{% tabs %}
{% tab title="200" %}
```json
{
    "uuid": "string",
    "post": {"json"}
}
```
{% endtab %}
{% endtabs %}

### Like/Unlike

<mark style="color:orange;">`PUT`</mark> `/post/{UUID}/like`

{% tabs %}
{% tab title="200" %}
```json
{
    "_message": "string"
}
```
{% endtab %}
{% endtabs %}
