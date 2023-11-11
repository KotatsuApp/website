---
title: Parsers library
description: Instructions for using the Kotatsu parser library.
footer: false
translator: CakesTwix
---

# Парсери Kotatsu
Ця бібліотека містить джерела манґи.

## Використання
Додайте його до вашого кореневого `build.gradle` в кінці репозиторіїв:

```groovy{4}
allprojects {
	repositories {
		...
		maven { url 'https://jitpack.io' }  // [!code focus]
	}
}
```
Додайте залежність

:::tip Для Java/Kotlin проекту:
```groovy
dependencies {
    implementation("com.github.KotatsuApp:kotatsu-parsers:$parsers_version")
}
```
:::

:::tip Для Android проекту:
```groovy
dependencies {
    implementation("com.github.KotatsuApp:kotatsu-parsers:$parsers_version") {
        exclude group: 'org.json', module: 'json'
    }
}
```
:::

Версії доступні на [JitPack](https://jitpack.io/#KotatsuApp/kotatsu-parsers)

:::tip Використання у коді
```kotlin
val parser = mangaLoaderContext.newParserInstance(MangaSource.MANGADEX)
```
:::

`mangaLoaderContext` є реалізацією класу`MangaLoaderContext`.
   
Дивіться приклади
[Android](https://github.com/KotatsuApp/Kotatsu/blob/devel/app/src/main/java/org/koitharu/kotatsu/core/parser/MangaLoaderContextImpl.kt)
та [Non-Android](https://github.com/KotatsuApp/kotatsu-dl/blob/master/src/main/kotlin/org/koitharu/kotatsu_dl/env/MangaLoaderContextImpl.kt) реалізації.

Зверніть увагу, що парсери `MangaSource.LOCAL` та `MangaSource.DUMMY` не можуть бути використані в якості екземплярів.

## Відмова від відповідальності згідно DMCA

Розробники цього додатку не мають жодного відношення до контенту, доступного в додатку. Він зібраний з
джерел, вільно доступних через будь-який веб-браузер.
