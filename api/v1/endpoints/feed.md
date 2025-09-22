---
icon: square-rss
---

# Feed

## Public Feed

<mark style="color:blue;">`GET`</mark> `/feed/{page}`

### Notes

* `{page}` defaults to page 1 if left out
* Each page shows 15 posts

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

<mark style="color:blue;">`GET`</mark> `/feed/user/{page}`

### Notes

* same as above

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

