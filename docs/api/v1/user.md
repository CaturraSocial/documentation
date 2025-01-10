---
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

Get the user info of the provided `UUID`

#### Notes:

* If left empty it will get the owner of the token info
* If the token doesn't have the `user.email` scope you will not get the email of that user
  * Do note that you will get the email of the owner of the token

<mark style="color:blue;">`GET`</mark> `/user/{UUID}`

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

Follow/Unfollow a user

<mark style="color:orange;">`PUT`</mark> `/follow/{UUID}`

{% tabs %}
{% tab title="200" %}
{% code lineNumbers="true" %}
```
{
    "message": "string"
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

