---
title: Diagnosis
description: Facing issues with a source or the app? Follow these steps to troubleshoot and find solutions.
---

# Diagnosis

Facing issues with a source or the app?
Follow these steps to troubleshoot and find solutions.

## Primary diagnosis

1. **Update app**: Go to <nav to="about"> and tap **Check for updates**.
1. **Manual series refresh**: Go to <nav to="main_feed"> and drag down to manually refresh problematic series.
1. **Test other series**: Try different series from the same source.
1. **Update WebView**: Ensure your WebView is current.
1. **Public WebView**: Attempt opening series in public WebView. Solve for CAPTCHA or Cloudflare protection if needed.
1. **Change connection**: Switch networks (Wi-Fi, mobile data, VPN) and confirm IP change.
1. **Collaborative check**: Get others to replicate the error.
1. **Source status**: Verify the source's status in a browser.
1. **Retry button**: Look for a retry button on the series page.
1. **Advanced settings**: Under <nav to="data">, try these options:
    - Clear thumbnails cache
    - Clear page cache
    - Clear network cache
    - Clear cookies
    - Under <nav to="network">, try to enable DNS over HTTPS
1. **Download issues**: Delete the queue and retry downloads.
1. **Restart Kotatsu**: Force close and reopen the app.

If any of these solutions help, go to [Personalized Issue](#personalized-issue).
If it is not just you, go to [Widespread Issue](#widespread-issue).

If none of these solutions help, try asking in our [Telegram group](https://t.me/kotatsuapp).

State your app version and the source, series, and chapter with the problem.

::: tip An app update may fix your issue
Wait or check for an app update if you have not already.
There are no ETAs for updates.
:::

## Personalized issue
If you're the only one facing a problem, you might be encountering an IP ban, or other countermeasures set by website owners against programs like **Kotatsu**.

**To minimize future issues:**
- Avoid using downloads with the source.
- Reduce the number of series in your favourites/history from that source.

::: warning
These are general guidelines as each site has its specific undisclosed limits and triggers.
:::

## Widespread issue
When everyone experiences a problem, it could be with the extension or app:

1. Check open issues [for the app](https://github.com/KotatsuApp/Kotatsu/issues) and/or [**parsers**](https://github.com/KotatsuApp/kotatsu-parsers/issues).
1. Check closed issues ([app](https://github.com/KotatsuApp/Kotatsu/issues?q=is%3Aissue+is%3Aclosed)/[parsers](https://github.com/KotatsuApp/kotatsu-parsers/issues?q=is%3Aissue+is%3Aclosed)) in case it's resolved but not yet released.
1. If not found, create a new issue.

::: warning
If the site itself is problematic, patience is the only solution until it becomes functional again.
:::