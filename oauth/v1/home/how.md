---
icon: semicolon
---

# How To

## Creating Applications

Head over to [https://caturra.app/dashboard/applications](https://caturra.app/dashboard/applications) and create an application.

<figure><img src="../../../.gitbook/assets/image (1).png" alt=""><figcaption><p>Applications Creation Screen</p></figcaption></figure>

## Oauth link

After creating the application, you should be able to copy a simple OAuth link\
`http://caturra.app/oauth/authorise?application_id=e2a5d0ad-93c4-4896-93de-95ea864bd18f&redirect_uri=https://caturra.app/callback/caturra`

<figure><img src="../../../.gitbook/assets/image (2).png" alt=""><figcaption><p>Authorisation page with default scopes</p></figcaption></figure>

### Adding default scopes

{% hint style="info" %}
### Note:

***

Users can change the default scopes within the authorise page.
{% endhint %}

Adding default scopes is simple; simply add `&scopes=` to the end of the URL using the scopes from [scopes.md](../../../api/v1/scopes.md "mention"). This can be a string separated by a comma `&scopes=user.email,user.edit` OR as an array `&scopes=["user.email","user.edit"]`&#x20;

<figure><img src="../../../.gitbook/assets/image (3).png" alt=""><figcaption><p>Authorisation page with custom scopes</p></figcaption></figure>

## User Authorised

Once a user authorises your application, they will be redirected to your redirect URI with a `&code=` parameter. You can use this to get an access and refresh token.

## Getting an access Token

{% hint style="info" %}
### Note:

***

By default, access tokens expire after 7 days, and refresh tokens expire after 30 days. Make sure to use the information provided by the api to determine when your tokens expire.
{% endhint %}

Getting an access token is as easy as making a post request to `/code`

<mark style="color:yellow;">`POST`</mark> `/code`

### Body

| Name | Type   |
| ---- | ------ |
| code | String |

### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "token": "Access Token",
    "token_expires_at": "2025-05-25 12:00:00",
    "refresh_token": "Refresh Token",
    "refresh_token_expires_at": "2025-06-18 12:00:00",
    "scopes": [
        "user.get",
        "user.email",
        "user.edit",
        "feed.get"
    ]
}
```
{% endtab %}
{% endtabs %}

## Refreshing a Token

Once a token expires, you can use the refresh token to gain a brand new token to use.

<mark style="color:yellow;">`POST`</mark> `/refreshtoken`

### Body

<table><thead><tr><th>Name</th><th valign="middle">Type</th></tr></thead><tbody><tr><td>refreshToken</td><td valign="middle">String</td></tr></tbody></table>

### Response

{% tabs %}
{% tab title="200" %}
```json
{
    "token": "Access Token",
    "token_expires_at": "2025-05-25 12:00:00",
    "refresh_token": "Refresh Token",
    "refresh_token_expires_at": "2025-06-18 12:00:00",
    "scopes": [
        "user.get",
        "user.email",
        "user.edit",
        "feed.get"
    ]
}
```
{% endtab %}
{% endtabs %}
