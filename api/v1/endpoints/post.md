---
icon: envelopes-bulk
---

# Post

So many changes will be made here as we perfect the wording of posts and replies and how they interact with one another.

## Get Post

<mark style="color:blue;">`GET`</mark> `/post/{UUID}`

### Scopes

> <mark style="color:yellow;">`post.get`</mark> / <mark style="color:yellow;">`reply.get`</mark>

### Response

{% tabs %}
{% tab title="200" %}
<pre class="language-json"><code class="lang-json">{
    "uuid": "string",
    "parent": <a data-footnote-ref href="#user-content-fn-1">{"parent object"}</a>,
    "author": {"user object"},
    "content": "string",
    "from": {"application object"},
    "locked": "boolean",
    "replies": <a data-footnote-ref href="#user-content-fn-2">{"reply object"}</a>,
    "like_count": int,
    "created_at": timestamp
}
</code></pre>
{% endtab %}
{% endtabs %}

## Send Post

<mark style="color:yellow;">`POST`</mark> `/post`

### Scopes

> <mark style="color:yellow;">`post.get`</mark>, <mark style="color:yellow;">`post.send`</mark> / <mark style="color:yellow;">`reply.get`</mark>, <mark style="color:yellow;">`reply.post`</mark>

### Body

| Name    | Type    | Notes                                    |
| ------- | ------- | ---------------------------------------- |
| content | String  | Max 500 Characters                       |
| locked  | Boolean |                                          |
| parent  | String  | The ID of the post you want to reply too |

### Response

{% tabs %}
{% tab title="200" %}
<pre class="language-json"><code class="lang-json">{
    "uuid": "string",
    "parent": <a data-footnote-ref href="#user-content-fn-1">{"parent object"}</a>,
    "author": {"user object"},
    "content": "string",
    "from": {"application object"},
    "locked": "boolean",
    "replies": <a data-footnote-ref href="#user-content-fn-2">{"reply object"}</a>,
    "like_count": int,
    "created_at": timestamp
}
</code></pre>
{% endtab %}
{% endtabs %}

## Update Post

<mark style="color:purple;">`PATCH`</mark> `/post/{UUID}`

### Scopes

> <mark style="color:yellow;">`post.get`</mark>, <mark style="color:yellow;">`post.edit`</mark> / <mark style="color:yellow;">`reply.get`</mark>, <mark style="color:yellow;">`reply.edit`</mark>

### Body

| Name    | Type    | Notes              |
| ------- | ------- | ------------------ |
| content | String  | Max 500 Characters |
| locked  | Boolean |                    |

### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "post object"
}
```
{% endtab %}
{% endtabs %}

## Delete Post

<mark style="color:red;">`DELETE`</mark> `/post/{UUID}`

### Scopes

> <mark style="color:yellow;">`post.get`</mark>, <mark style="color:yellow;">`post.delete`</mark> / <mark style="color:yellow;">`reply.get`</mark>, <mark style="color:yellow;">`reply.delete`</mark>

### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "post object"
}
```
{% endtab %}
{% endtabs %}

## Like/Unlike

<mark style="color:yellow;">`POST`</mark> `/post/{UUID}/like`

### Scopes

> <mark style="color:yellow;">`post.get`</mark>, <mark style="color:yellow;">`post.like`</mark> / <mark style="color:yellow;">`reply.get`</mark>, <mark style="color:yellow;">`reply.like`</mark>

### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "action": "liked",
    "uuid": "string"
}
```

```json
{
    "action": "unliked",
    "uuid": "string"
}
```
{% endtab %}
{% endtabs %}

[^1]: Excludes Replies

[^2]: Exclude Replies and Parent Data
