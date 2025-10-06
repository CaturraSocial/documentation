---
icon: house
---

# Home

{% hint style="danger" %}
Everything here is mostly final, wording and how the system works could still be changed before we launch
{% endhint %}

## Welcome

to the V1 OAuth, here is a comprehensive doc on how to use our OAuth for your applications. Make sure to read everything. For any extra explanations, please head over to our [Discord](https://discord.gg/NkUtMFraHg).

## URL

`https://caturra.app/api/oauth`

## Errors

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
