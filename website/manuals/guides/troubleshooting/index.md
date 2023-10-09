---
title: Troubleshooting
description: Facing source or app issues? Here's how to troubleshoot.
---

# Troubleshooting

Facing source or app issues? Here's how to troubleshoot.

Be sure to check the [Frequently Asked Questions]() for how to address common issues too.

## WebView

### Clearing cookies and WebView data
This resets your WebView to a clean state, including any login states.

1. Navigate to <nav to="data">.
1. Tap **Clear network cache**.
1. Tap **Clear cookies**.

### WebView update
To update WebView, you need to find what WebView implementation is used on your device.

Typical default implementation depends on the Android version as follows:

::: tabs
== Android 10 and above
[Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview)
== Android 7 - 9
[Google Chrome](https://play.google.com/store/apps/details?id=com.android.chrome)
== Android 6 and below
[Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview)
:::

::: tip **Android 7** and above
Newer Android users can check/change WebView in [Developer Options](https://developer.android.com/studio/debug/dev-options).
:::

::: warning Caution with Non-Standard WebView
Using non-standard WebView (like Firefox) might cause **Kotatsu** to malfunction or crash.

It's best to use the standard [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview) or [Google Chrome](https://play.google.com/store/apps/details?id=com.android.chrome).
:::

## General

### Obtaining crash/error logs
For crash investigations, navigate to <nav to="about"> and tap **Share logs**.

### Obtaining more logs
To diagnose abnormal app behavior, record device logs using a [Logcat Reader](https://play.google.com/store/apps/details?id=com.dp.logcatapp).