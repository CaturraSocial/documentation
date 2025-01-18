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

#### Scopes

> <mark style="color:yellow;">`post.get`</mark> / <mark style="color:yellow;">`reply.get`</mark>

#### Response

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
    "replies": {"post object"}
}
```
{% endtab %}
{% endtabs %}

### Send Post

<mark style="color:orange;">`PUT`</mark> `/post`

#### Scopes

> <mark style="color:yellow;">`post.get`</mark>, <mark style="color:yellow;">`post.send`</mark> / <mark style="color:yellow;">`reply.get`</mark>, <mark style="color:yellow;">`reply.post`</mark>

#### Body

| Name    | Type    | Notes                 |
| ------- | ------- | --------------------- |
| content | String  | Max 500 Characters    |
| lock    | Boolean |                       |
| from    | String  | Can be left as `null` |
| parent  | String  | read about Replies    |

#### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "uuid": "string",
    "parent": "string",
    "post": {"post object"}
}
```
{% endtab %}
{% endtabs %}

### Update Post

<mark style="color:purple;">`PATCH`</mark> `/post/{UUID}`

#### Scopes

> <mark style="color:yellow;">`post.get`</mark>, <mark style="color:yellow;">`post.edit`</mark> / <mark style="color:yellow;">`reply.get`</mark>, <mark style="color:yellow;">`reply.edit`</mark>

#### Body

| Name    | Type    | Notes              |
| ------- | ------- | ------------------ |
| content | String  | Max 500 Characters |
| lock    | Boolean |                    |

#### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "uuid": "string",
    "post": {"post object"}
}
```
{% endtab %}
{% endtabs %}

### Delete Post

<mark style="color:red;">`DELETE`</mark> `/post/{UUID}`

#### Scopes

> <mark style="color:yellow;">`post.get`</mark>, <mark style="color:yellow;">`post.delete`</mark> / <mark style="color:yellow;">`reply.get`</mark>, <mark style="color:yellow;">`reply.delete`</mark>

#### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "uuid": "string",
    "post": {"post object"}
}
```
{% endtab %}
{% endtabs %}

### Like/Unlike

<mark style="color:orange;">`PUT`</mark> `/post/{UUID}/like`

#### Scopes

> <mark style="color:yellow;">`post.get`</mark>, <mark style="color:yellow;">`post.like`</mark> / <mark style="color:yellow;">`reply.get`</mark>, <mark style="color:yellow;">`reply.like`</mark>

#### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "_message": "string"
}
```
{% endtab %}
{% endtabs %}
