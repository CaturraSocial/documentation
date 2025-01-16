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

# Profile

### Update Profile

Edit a user account

#### Scopes:

* `user.get`
* `user.edit`

<mark style="color:purple;">`PATCH`</mark> `/profile`

| Name          | Type   | Notes                                                    |
| ------------- | ------ | -------------------------------------------------------- |
| username      | String | Can only use `a-z`, `A-Z`, `0-9`, `-`, `_` Max 20 length |
| display\_name | String | Can use any English character, Max 30 length             |
| bio           | String | Max 100 Characters                                       |

{% tabs %}
{% tab title="200" %}
```json
{
    "_message": {json}
}
```
{% endtab %}
{% endtabs %}
