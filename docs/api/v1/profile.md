---
icon: square-user
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

# Profile

### Update Profile

Edit a user account

#### Scopes:

* `user.get`
* `user.edit`

<mark style="color:purple;">`PATCH`</mark> `/profile`

<table><thead><tr><th width="165">Name</th><th width="157">Type</th><th>Notes</th></tr></thead><tbody><tr><td>username</td><td>String</td><td>Can only use <code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, <code>-</code>, <code>_</code> Max 20 length</td></tr><tr><td>display_name</td><td>String</td><td>Can use any English character, Max 30 length</td></tr><tr><td>bio</td><td>String</td><td>Max 100 Characters</td></tr></tbody></table>

{% tabs %}
{% tab title="200" %}
```json
{
    "_message": {json}
}
```
{% endtab %}
{% endtabs %}
