---
title: Вирішення проблем
description: Виникли проблеми з вихідним кодом або додатком? Ось як вирішити проблеми.
footer: false
translator: CakesTwix
---

# Вирішення проблем

Виникли проблеми з вихідним кодом або додатком? Ось як вирішити проблеми.

Не забудьте також переглянути [Часті запитання](), щоб дізнатися, як вирішити поширені проблеми.

## WebView

### Очищення файлів cookie та даних WebView
Це призведе до очищення WebView до чистого стану, включаючи всі записи для входу в системи.

1. Перейдіть до <nav to="data">.
1. Натисніть **Очистити мережевий кеш**.
1. Натисніть **Очистити кукі**.

### Оновлення WebView
Щоб оновити WebView, вам потрібно з'ясувати, яка реалізація WebView використовується на вашому пристрої.

Типова реалізація за замовчуванням залежить від версії Android наступним чином:

::: tabs
== Android 10 і вище
[Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview)
== Android 7 - 9
[Google Chrome](https://play.google.com/store/apps/details?id=com.android.chrome)
== Android 6 і нижче
[Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview)
:::

::: tip **Android 7** і вище
Нові користувачі Android можуть перевірити/змінити WebView у [Параметри розробника](https://developer.android.com/studio/debug/dev-options).
:::

::: warning Обережно з нестандартними WebView
Використання нестандартного WebView (наприклад, Firefox) може призвести до неправильної роботи або аварійного завершення роботи **Kotatsu**.

Найкраще використовувати стандартний [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview) або [Google Chrome](https://play.google.com/store/apps/details?id=com.android.chrome).
:::

## Загальне

### Отримання журналів збоїв/помилок
Щоб дізнатися про причини збоїв, перейдіть до <nav to="about"> і натисніть **Поділиться логами**.

### Отримання додаткових звітів
Щоб діагностувати ненормальну поведінку програми, запишіть логи пристрою за допомогою [Logcat Reader](https://play.google.com/store/apps/details?id=com.dp.logcatapp).