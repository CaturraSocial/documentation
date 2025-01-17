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

### Get User

<mark style="color:blue;">`GET`</mark> `/user/{UUID}`

#### Notes

* If left empty it will get the owner of the token info
* If the token doesn't have the <mark style="color:yellow;">`user.email`</mark> scope you will not get the email of that user

#### Scopes

> <mark style="color:yellow;">`user.get`</mark> / <mark style="color:yellow;">`user.email`</mark>

#### Response

{% tabs %}
{% tab title="200" %}
{% code lineNumbers="true" fullWidth="false" %}
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

### Follow/Unfollow

<mark style="color:orange;">`PUT`</mark> `/user/{UUID}/follow`

#### Scopes

> <mark style="color:yellow;">`user.get`</mark>, <mark style="color:yellow;">`user.follow`</mark>

#### Response

{% tabs %}
{% tab title="200" %}
{% code lineNumbers="true" %}
```json
{
    "_message": "string"
}
```
{% endcode %}
{% endtab %}
{% endtabs %}
