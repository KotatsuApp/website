---
title: Common issues
description: Facing issues with a source or the app? Here's how to tackle common challenges.
---

# Common issues

Facing issues with a source or the app?
Here's how to tackle common challenges.

## Basic issues

### Slow loading
Sources being slow could stem from site slowness, your internet, or source-imposed rate limits/IP bans.

## Advanced errors

### `Unable to resolve host` / `Connection failed` / `Failed to connect to` / `timeout` / `connection reset`
These errors indicate connection issues. Possible causes include:

* Weak internet connection.
* App lacks internet access.
* Your ISP has blocked the site.
* The site is down.

Try these solutions:

* Enable **DNS over HTTPS**.
* Change network (Wi-Fi, mobile data, VPN).
* Reboot router.

### `java.security.cert.CertPathValidatorException` / `Chain validation failed`
Validation issue with source's certificate.

Try these solutions:

* Check expired certificate, use SSL checker.
* Set correct device date and time.
* Change network (Wi-Fi, mobile data, VPN).
* Enable **Ignore SSL errors** in <nav to="network"/>
* Reboot device.

## HTTP errors
Encountering HTTP errors? Here's what they mean and how to address them.

### `HTTP Error: 403` - Forbidden
Possible reasons for this error:
* The selected source has Cloudflare protection. Check the [Cloudflare guide](/manuals/guides/troubleshooting/#cloudflare) for solutions.
* The source might be down, removed the series, or banned your IP.
  > Open WebView to confirm.

### `HTTP Error: 404` - Not Found
This error likely indicates a down source or removed series.
* Use **WebView** to verify.
  > Consider switching to a different source for the series.

### `HTTP Error: 429` - Too Many Requests
This error suggests the source temporarily banned your IP due to fast downloads/reads.

### `HTTP Error: 5xx`
Errors like `500`, `502`, etc., indicate server-side issues on the source's end.

[Check the source in WebView](/manuals/guides/troubleshooting/#accessing-websites-via-webview) to confirm if it's down.

### `HTTP Error: 1006`
This error means a temporary IP ban by the source.

### `HTTP Error: 1020`
This error points to violating a firewall rule set by the site owner.
The owner might raise Cloudflare protection or block IPs from outside their country.

::: warning
For unlisted errors or if instructions don't help, refer to [Diagnosis](/manuals/guides/troubleshooting/diagnosis).
:::