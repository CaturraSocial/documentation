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

{% hint style="danger" %}
Nothing here is final, expect massive changes between now and the launch of V1.
{% endhint %}

### Welcome

to the V1 API here is a comprehensive doc on how to use our API for your applications. Make sure to read everything, For any extra explanations please head over to our [discord](https://discord.gg/NkUtMFraHg).

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
