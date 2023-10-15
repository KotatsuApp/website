---
title: Parsers library
description: Instructions for using the Kotatsu parser library.
footer: false
---

# Kotatsu parsers
This library provides manga sources.

## Usage
Add it to your root `build.gradle` at the end of repositories:

```groovy{4}
allprojects {
	repositories {
		...
		maven { url 'https://jitpack.io' }  // [!code focus]
	}
}
```
Add the dependency

:::tip For Java/Kotlin project:
```groovy
dependencies {
    implementation("com.github.KotatsuApp:kotatsu-parsers:$parsers_version")
}
```
:::

:::tip For Android project:
```groovy
dependencies {
    implementation("com.github.KotatsuApp:kotatsu-parsers:$parsers_version") {
        exclude group: 'org.json', module: 'json'
    }
}
```
:::

Versions are available on [JitPack](https://jitpack.io/#KotatsuApp/kotatsu-parsers)

:::tip Usage in code
```kotlin
val parser = mangaLoaderContext.newParserInstance(MangaSource.MANGADEX)
```
:::

`mangaLoaderContext` is an implementation of the `MangaLoaderContext` class.
   
See examples
of [Android](https://github.com/KotatsuApp/Kotatsu/blob/devel/app/src/main/java/org/koitharu/kotatsu/core/parser/MangaLoaderContextImpl.kt)
and [Non-Android](https://github.com/KotatsuApp/kotatsu-dl/blob/master/src/main/kotlin/org/koitharu/kotatsu_dl/env/MangaLoaderContextImpl.kt) implementation.

Note that the `MangaSource.LOCAL` and `MangaSource.DUMMY` parsers cannot be instantiated.

## DMCA disclaimer

The developers of this application have no affiliation with the content available in the app. It is collected from
sources freely available through any web browser.