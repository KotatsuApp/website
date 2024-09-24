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

2. Add the dependency

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

When used in Android
projects, [core library desugaring](https://developer.android.com/studio/write/java8-support#library-desugaring) with
the [NIO specification](https://developer.android.com/studio/write/java11-nio-support-table) should be enabled to
support Java 8+ features.


:::tip Usage in code
```kotlin
val parser = mangaLoaderContext.newParserInstance(MangaParserSource.MANGADEX)
```
:::

`mangaLoaderContext` is an implementation of the `MangaLoaderContext` class.

See examples
of [Android](https://github.com/KotatsuApp/Kotatsu/blob/devel/app/src/main/kotlin/org/koitharu/kotatsu/core/parser/MangaLoaderContextImpl.kt)
and [Non-Android](https://github.com/KotatsuApp/kotatsu-dl/blob/master/src/jvmMain/kotlin/org/koitharu/kotatsu_dl/logic/MangaLoaderContextImpl.kt)
implementation.

Note that the `MangaParserSource.DUMMY` parsers cannot be instantiated.

## Projects that use the library

- [Kotatsu](https://github.com/KotatsuApp/Kotatsu)
- [kotatsu-dl](https://github.com/KotatsuApp/kotatsu-dl)
- [Shirizu (WIP)](https://github.com/ztimms73/shirizu)
- [OtakuWorld](https://github.com/jakepurple13/OtakuWorld)

## Contribution

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the guidelines.

## DMCA disclaimer

The developers of this application have no affiliation with the content available in the app. It is collected from
sources freely available through any web browser.