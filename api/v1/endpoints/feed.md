---
icon: square-rss
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

# Feed

### Public Feed

<mark style="color:blue;">`GET`</mark> `/feed`

#### Response

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

### User Feed

<mark style="color:blue;">`GET`</mark> `/feed/user`

#### Notes

Must be a user token with <mark style="color:yellow;">`feed.get`</mark>&#x20;

#### Response

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

