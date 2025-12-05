---
icon: user
---

# User

## User

<mark style="color:blue;">`GET`</mark> `/user/{UUID}`

### Notes

* If left empty, it will get the owner of the token's info
  * You will only receive the email of the token owner if you have the <mark style="color:yellow;">`user.email`</mark> scope
  * It will return `NULL` for both `email` and `email_verified`&#x20;
* When requesting a specific user, the `email` and `email_verified` will not be returned
* `avatar` currently returns a Gravatar URL; you can follow their docs for further customisation

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
    "avatar": "string",
    "email": "string",
    "email_verified": "boolean",
    "badge": ["array"],
    "bio": "string",
    "follow_count": int,
    "following_count": int,
    "joined": timestamp
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

## User Posts

<mark style="color:blue;">`GET`</mark> `/user/{UUID}/posts/{page}`

### Scopes

> <mark style="color:yellow;">`user.get`</mark>, <mark style="color:yellow;">`post.get`</mark>

### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "user": "string",
    "posts": [
        {"post object"},
        {"post object"},
        {"post object"}
    ]
}
```
{% endtab %}
{% endtabs %}

## Follow/Unfollow

<mark style="color:yellow;">`POST`</mark> `/user/{UUID}/follow`

### Scopes

> <mark style="color:yellow;">`user.get`</mark>, <mark style="color:yellow;">`user.follow`</mark>

### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "action": "followed",
    "uuid": "string"
}
```

```json
{
    "action": "unfollowed",
    "uuid": "string"
}
```
{% endtab %}
{% endtabs %}

## Following

<mark style="color:blue;">`GET`</mark> `/user/{UUID}/following`

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

<mark style="color:blue;">`GET`</mark> `/user/{UUID}/followers`

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
