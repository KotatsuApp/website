---
title: Загальні проблеми
description: Виникли проблеми з джерелом або додатком? Ось як вирішити найпоширеніші проблеми.
footer: false
translator: CakesTwix
---

# Загальні проблеми
Виникли проблеми з джерелом або додатком?
Ось як вирішити найпоширеніші проблеми.

## Основні проблеми

### Повільне завантаження
Повільне завантаження джерел може бути пов'язане з повільністю сайту, вашого інтернету або обмеженнями швидкості, встановленими джерелом, чи обмеженням по ip-адресі.

## Поширені помилки

### `Неможливо визначити хост` / `Не вдалося з'єднатися` / `Не вдалося з'єднатися з` / `Тайм-аут` / `Скидання з'єднання`
Ці помилки вказують на проблеми зі з'єднанням. Можливі причини включають в себе:

* Слабке з'єднання з Інтернетом.
* Додатку бракує доступу до інтернету.
* Ваш провайдер заблокував сайт.
* Сайт не працює.

Спробуйте ці рішення:

* Увімкніть **DNS over HTTPS**.
* Змініть мережу (Wi-Fi, мобільна передача даних, VPN).
* Перезавантажте роутер.

### `java.security.cert.CertPathValidatorException` / `Chain validation failed`
Проблема валідації з сертифікатом джерела.

Спробуйте ці рішення:

* Перевірте термін дії сертифіката, скористайтеся SSL checker.
* Встановіть правильну дату і час на пристрої.
* Змініть мережу (Wi-Fi, мобільна передача даних, VPN).
* Увімкніть **Ігноруйте помилки SSL** у <nav to="network"/>.
* Перезавантажте пристрій.

## Помилки HTTP
Виникли помилки HTTP? Ось що вони означають і як їх усунути.

### `Помилка HTTP: 403` - Заборонено
Можливі причини цієї помилки:
* Вибране джерело має захист Cloudflare. Зверніться до [Посібника з Cloudflare] (/manuals/guides/troubleshooting/#cloudflare/) для вирішення проблеми.
* Джерело може бути неактивним, манґу вилучено або ваш IP-адресу заблоковано.
  > Відкрийте WebView, щоб перевірити.

### `Помилка HTTP: 404` - Не знайдено
Ця помилка, ймовірно, вказує на непрацююче джерело або вилучену манґу.
* Скористайтеся **WebView** для перевірки.
  > Спробуйте переключитися на інше джерело манґи.

### `Помилка HTTP: 429` - Занадто багато запитів
Ця помилка означає, що джерело тимчасово заблокувало ваш IP через швидке завантаження/читання.

### `Помилка HTTP: 5xx'
Помилки типу `500`, `502` і т.д. вказують на проблеми на стороні сервера на стороні джерела.

[Перевірте джерело у WebView](/manuals/guides/troubleshooting/#accessing-websites-via-webview/), щоб переконатися, що воно не працює.

### `Помилка HTTP: 1006`
Ця помилка означає тимчасову заборону IP-адреси джерелом.

### `Помилка HTTP: 1020`
Ця помилка вказує на порушення правил брандмауера, встановлених власником сайту.
Власник може підвищити захист Cloudflare або заблокувати IP-адреси з-за меж своєї країни.

::: warning
Якщо помилки не перелічені або якщо інструкції не допомогли, зверніться до розділу [Діагностика](/manuals/guides/troubleshooting/diagnosis/).
:::