---
icon: house
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

# Home

### Errors

This is how ALL errors will be sent back. If anything else is returned, report it to the developers.

{% tabs %}
{% tab title="Errors" %}
```json
{
    "code": error code,
    "_message": "an error message explaining what failed"
}
```
{% endtab %}
{% endtabs %}
