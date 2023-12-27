---
title: Synchronization
description: Allows you to continue reading on your device from where you left off on another device.
footer: false
---

# Synchronization
Allows you to continue reading on your device from where you left off on another device.

List of official servers:

| Domain           | Location        | Status                                        |
| ---------------- | --------------- | --------------------------------------------- |
| sync.kotatsu.app | Belarus         | ![](https://status.kotatsu.app/api/badge/1/status) |

## What is synchronization?
Synchronization is needed to store your collection of favorites, history and categories and have remote access to them. On a synchronized device, you can restore your manga collection in real time without loss. It also supports working across multiple devices. It is convenient for those who use several devices.

## How does synchronization work?
 - An account is created and configured in the application where it will store data;
 - Synchronization starts. The data selected by the user is saved on the service and stored there under protection;
 - Another device connects and syncs with the service;
 - The uploaded data appears on the device connected to the account.

## What data can be synchronized?
 - Favorites (with categories);
 - History.
 
## How do I sync my data?
Go to <nav to='services'>, then select **Synchronization**. Enter your email address (even if you have not registered in the synchronization system, the authorization screen also acts as a registration screen), then come up with and enter a password. 

:::warning Attention
There is no password recovery from the account at the moment, if you forget the password, you will not be able to log into your account on other devices, so we recommend that you do not forget the password or write it down somewhere. 
:::

After the authorization/registration process, you will return back to the **Content** screen. To set up synchronization, select **Synchronization** again, and then you will go to system sync settings. Choose what you want to sync, history, favorites or all together, after which automatic synchronization to our server will begin.

## Can I use a synchronization server on my hosting?
Yes, you can use your synchronization server in the application by specifying its address (<nav to='server_address'>). Instructions for deploying the server are [here](/dev/sync-server/).