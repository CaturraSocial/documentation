---
icon: square-rss
---

# Feed

{% hint style="danger" %}
These endpoints are not implemented yet.
{% endhint %}

## Public Feed

<mark style="color:blue;">`GET`</mark> `/feed`

### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "feed": [
        {"post object"},
        {"post object"},
        {"post object"}
    ]
}
```
{% endtab %}
{% endtabs %}

## User Feed

<mark style="color:blue;">`GET`</mark> `/feed/user`

### Scopes

> <mark style="color:yellow;">`feed.get`</mark>&#x20;

### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "feed": [
        {"post object"},
        {"post object"},
        {"post object"}
    ]
}
```
{% endtab %}
{% endtabs %}

