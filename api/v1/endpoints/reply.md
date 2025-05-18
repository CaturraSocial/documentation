---
icon: reply
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

# Reply

{% hint style="info" %}
Everything here can be done with the posts API. These endpoints are to help you easily understand the difference between a post and a reply.
{% endhint %}

## Get Reply

<mark style="color:blue;">`GET`</mark> `/reply/{UUID}`

### Scopes

> <mark style="color:yellow;">`reply.get`</mark>

### Response

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

## Send Reply

<mark style="color:yellow;">`POST`</mark> `/reply`

### Scopes

> <mark style="color:yellow;">`reply.get`</mark>, <mark style="color:yellow;">`reply.post`</mark>

### Body

| Name    | Type    | Notes                 |
| ------- | ------- | --------------------- |
| content | String  | Max 500 Characters    |
| lock    | Boolean |                       |
| from    | String  | Can be left as `null` |
| parent  | String  | read about Replies    |

### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "uuid": "string",
    "parent": "string",
    "reply": {"post object"}
}
```
{% endtab %}
{% endtabs %}

## Update Reply

<mark style="color:purple;">`PATCH`</mark> `/reply/{UUID}`

### Scopes

> <mark style="color:yellow;">`reply.get`</mark>, <mark style="color:yellow;">`reply.edit`</mark>

### Body

| Name    | Type    | Notes              |
| ------- | ------- | ------------------ |
| content | String  | Max 500 Characters |
| lock    | Boolean |                    |

### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "uuid": "string",
    "reply": {"post object"}
}
```
{% endtab %}
{% endtabs %}

## Delete Reply

<mark style="color:red;">`DELETE`</mark> `/reply/{UUID}`

### Scopes

> <mark style="color:yellow;">`reply.get`</mark>, <mark style="color:yellow;">`reply.delete`</mark>

### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "uuid": "string",
    "reply": {"post object"}
}
```
{% endtab %}
{% endtabs %}

## Like/Unlike

<mark style="color:orange;">`PUT`</mark> `/like/{UUID}`

### Scopes

> <mark style="color:yellow;">`reply.get`</mark>, <mark style="color:yellow;">`reply.like`</mark>

### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "_message": "string"
}
```
{% endtab %}
{% endtabs %}
