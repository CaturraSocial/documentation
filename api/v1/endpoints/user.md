---
icon: user
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

# User

## Get User

<mark style="color:blue;">`GET`</mark> `/user/{UUID}`

### Notes

* If left empty, it will get the owner of the token info
* You can only get the owner of the tokens email, anyone else will always show as null

### Scopes

> <mark style="color:yellow;">`user.get`</mark>, <mark style="color:yellow;">`user.email`</mark>

### Response

{% tabs %}
{% tab title="200" %}
{% code fullWidth="false" %}
```json
{
    "uuid": "string",
    "username": "string",
    "display_name": "string",
    "email": "string",
    "email_verified": "boolean",
    "badge": ["array"],
    "bio": "string",
    "joined": timestamp
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Follow/Unfollow

<mark style="color:yellow;">`POST`</mark> `/follow/{UUID}`

### Scopes

> <mark style="color:yellow;">`user.get`</mark>, <mark style="color:yellow;">`user.follow`</mark>

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

## Following

<mark style="color:blue;">`GET`</mark> `/follow/{UUID}/following`

### Scopes

> <mark style="color:yellow;">`user.get`</mark>, <mark style="color:yellow;">`user.following.get`</mark>

### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "following": ["array"]
}
```
{% endtab %}
{% endtabs %}

## Followers

<mark style="color:blue;">`GET`</mark> `/follow/{UUID}/followers`

### Scopes

> <mark style="color:yellow;">`user.get`</mark>, <mark style="color:yellow;">`user.followers.get`</mark>

### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "followers": ["array"]
}
```
{% endtab %}
{% endtabs %}
