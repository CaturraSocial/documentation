---
description: This Document highlights everything that is included in our V1 api.
hidden: true
---

# V1 API Documentation

{% hint style="warning" %}
## Note: this page is still being worked on
{% endhint %}

## Common

{% hint style="info" %}
These are used for ALL endpoints Unless specified.
{% endhint %}

{% hint style="warning" %}
Like, Follow and Profile endpoints can not be used with a "user" generated token
{% endhint %}

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Misc

### Get API Updates

<mark style="color:blue;">`GET`</mark> `/update`

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
    "version": "string",
    "updates": {"json"}
}
```
{% endtab %}

{% tab title="400" %}
```json
{
    "code": integer,
    "message": "Invalid request"
}
```
{% endtab %}
{% endtabs %}

### Get API Status

This will give a response time back under `ping`

<mark style="color:blue;">`GET`</mark> `/ping`

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
    "ping": "pong"
}
```
{% endtab %}

{% tab title="OTHER" %}
```json
{
    "code": integer,
    "message": "string"
}
```
{% endtab %}
{% endtabs %}



## User

### Get User

Gets the user info of the provided `UUID`, Note if left empty it will get YOUR info

<mark style="color:blue;">`GET`</mark> `/user/{UUID}`

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
    "uuid": "string",
    "username": "string",
    "displayName": "string",
    "badge": ["array"],
    "bio": "string",
    "joined": integer
}
```
{% endtab %}

{% tab title="400" %}
```json
{
    "code": integer,
    "message": "Invalid request"
}
```
{% endtab %}
{% endtabs %}

### Follow/Unfollow

Follow/Unfollow a user

<mark style="color:orange;">`PUT`</mark> `/follow/{UUID}`

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
    "message": "string"
}
```
{% endtab %}

{% tab title="400" %}
```json
{
    "code": integer,
    "message": "Invalid request"
}
```
{% endtab %}
{% endtabs %}

## Post / Reply

### Send Post/Reply

Make a post OR Reply

<mark style="color:orange;">`PUT`</mark> `/post`

**Body**

| Name    | Type    | Notes                       |
| ------- | ------- | --------------------------- |
| content | String  | Max 500 Characters          |
| lock    | Boolean |                             |
| parent  | String  | Leave `NULL` to make a post |

**Response**

{% tabs %}
{% tab title="200" %}
<pre class="language-json"><code class="lang-json">{
    "uuid": "string",
    "parent": "string",
    <a data-footnote-ref href="#user-content-fn-1">"post": {"json"</a>}
}
</code></pre>
{% endtab %}

{% tab title="400" %}
```json
{
    "code": integer,
    "message": "Invalid request"
}
```
{% endtab %}
{% endtabs %}

### Get Post/Reply

Get a post OR reply. NOTE: parent will be `NULL` if post

<mark style="color:blue;">`GET`</mark> `/post/{UUID}`

Response

{% tabs %}
{% tab title="200" %}
```json
{
    "uuid": "string",
    "parent": "string",
    "author": "string",
    "content": "string",
    "lock": "boolean",
    "replies": {"json"}
}
```
{% endtab %}

{% tab title="400" %}
```json
{
    "code": integer,
    "message": "Invalid request"
}
```
{% endtab %}
{% endtabs %}

### Update Post/Reply

Updates a post OR reply

<mark style="color:purple;">`PATCH`</mark> `/post/{UUID}`

**Body**

| Name    | Type    | Notes              |
| ------- | ------- | ------------------ |
| content | String  | Max 500 Characters |
| lock    | Boolean |                    |

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
    "uuid": "string",
    "post": {"json"}
}
```
{% endtab %}

{% tab title="400" %}
```json
{
    "code": integer,
    "message": "Invalid request"
}
```
{% endtab %}
{% endtabs %}

### Delete Post/Reply

Deletes a post OR reply

<mark style="color:red;">`DELETE`</mark> `/post/{UUID}`

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
    "uuid": "string",
    "post": {"json"}
}
```
{% endtab %}

{% tab title="400" %}
```json
{
    "code": integer,
    "message": "Invalid request"
}
```
{% endtab %}
{% endtabs %}

### Like/Unlike

Like/Unlike a post/reply

<mark style="color:orange;">`PUT`</mark> `/like/{UUID}`

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
    "message": "string"
}
```
{% endtab %}

{% tab title="400" %}
```json
{
    "code": integer,
    "message": "Invalid request"
}
```
{% endtab %}
{% endtabs %}



## Profile



### Update Profile

Edit your account profile

<mark style="color:purple;">`PATCH`</mark> `/profile`

**Body**

<table><thead><tr><th width="230">Name</th><th width="156">Type</th><th>Notes</th></tr></thead><tbody><tr><td>username</td><td>String</td><td>Can only use <code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, <code>-</code>, <code>_</code> Max 20 length</td></tr><tr><td>displayname</td><td>String</td><td>Can use any English character, Max 30 length</td></tr><tr><td>bio</td><td>String</td><td>Max 100 Characters</td></tr></tbody></table>

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
    "message": {"json"}
}
```
{% endtab %}

{% tab title="400" %}
```json
{
    "code": integer,
    "message": "Invalid request"
}
```
{% endtab %}
{% endtabs %}



[^1]: This will be written out in full later on.
