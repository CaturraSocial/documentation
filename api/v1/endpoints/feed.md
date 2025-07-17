---
icon: square-rss
---

# Feed

{% hint style="danger" %}
These endpoints are still actively being worked on; The responses are not final.
{% endhint %}

## Public Feed

<mark style="color:blue;">`GET`</mark> `/feed`

### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "_message": "string",
    "posts": {"post object"}
}
```
{% endtab %}
{% endtabs %}

## User Feed

<mark style="color:blue;">`GET`</mark> `/feed/user`

### Notes

> <mark style="color:yellow;">`feed.get`</mark>&#x20;

### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "_message": "string",
    "posts": {"post object"}
}
```
{% endtab %}
{% endtabs %}

