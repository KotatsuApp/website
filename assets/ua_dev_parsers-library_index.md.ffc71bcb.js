import{_ as s,c as a,o as n,X as o}from"./chunks/framework.43b9ffd8.js";const B=JSON.parse('{"title":"Parsers library","description":"Instructions for using the Kotatsu parser library.","frontmatter":{"title":"Parsers library","description":"Instructions for using the Kotatsu parser library.","footer":false,"translator":"CakesTwix"},"headers":[],"relativePath":"ua/dev/parsers-library/index.md","filePath":"ua/dev/parsers-library/index.md","lastUpdated":1711117129000,"breadcrumbs":[{"text":"Для розробників","items":[{"text":"Зробити внесок","link":"/ua/dev/contribute/"},{"text":"Бібліотека парсерів","link":"/ua/dev/parsers-library/"},{"text":"Сервер синхронізації","link":"/ua/dev/sync-server/"}]},{"text":"Бібліотека парсерів","link":"/ua/dev/parsers-library/"}]}'),e={name:"ua/dev/parsers-library/index.md"},p=o(`<h1 id="parseri-kotatsu" tabindex="-1">Парсери Kotatsu <a class="header-anchor" href="#parseri-kotatsu" aria-label="Permalink to &quot;Парсери Kotatsu&quot;">​</a></h1><p>Ця бібліотека містить джерела манґи.</p><h2 id="vikoristannya" tabindex="-1">Використання <a class="header-anchor" href="#vikoristannya" aria-label="Permalink to &quot;Використання&quot;">​</a></h2><p>Додайте його до вашого кореневого <code>build.gradle</code> в кінці репозиторіїв:</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki one-dark-pro has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">allprojects {</span></span>
<span class="line"><span style="color:#ABB2BF;">	repositories {</span></span>
<span class="line"><span style="color:#ABB2BF;">		...</span></span>
<span class="line has-focus highlighted"><span style="color:#ABB2BF;">		maven { url </span><span style="color:#98C379;">&#39;https://jitpack.io&#39;</span><span style="color:#ABB2BF;"> }  </span></span>
<span class="line"><span style="color:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#24292E;">allprojects {</span></span>
<span class="line"><span style="color:#24292E;">	repositories {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">..</span><span style="color:#24292E;">.</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">		maven { url </span><span style="color:#032F62;">&#39;https://jitpack.io&#39;</span><span style="color:#24292E;"> }  </span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Додайте залежність</p><div class="tip custom-block"><p class="custom-block-title">Для Java/Kotlin проекту:</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">dependencies {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">implementation</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;com.github.KotatsuApp:kotatsu-parsers:</span><span style="color:#E06C75;">$parsers_version</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dependencies {</span></span>
<span class="line"><span style="color:#24292E;">    implementation(</span><span style="color:#032F62;">&quot;com.github.KotatsuApp:kotatsu-parsers:</span><span style="color:#24292E;">$parsers_version</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">Для Android проекту:</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">dependencies {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">implementation</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;com.github.KotatsuApp:kotatsu-parsers:</span><span style="color:#E06C75;">$parsers_version</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        exclude </span><span style="color:#D19A66;">group</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;org.json&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">module</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;json&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dependencies {</span></span>
<span class="line"><span style="color:#24292E;">    implementation(</span><span style="color:#032F62;">&quot;com.github.KotatsuApp:kotatsu-parsers:</span><span style="color:#24292E;">$parsers_version</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        exclude </span><span style="color:#005CC5;">group</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;org.json&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">module</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;json&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div><p>Версії доступні на <a href="https://jitpack.io/#KotatsuApp/kotatsu-parsers" target="_blank" rel="noreferrer">JitPack</a></p><div class="tip custom-block"><p class="custom-block-title">Використання у коді</p><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">val</span><span style="color:#ABB2BF;"> parser </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> mangaLoaderContext.</span><span style="color:#61AFEF;">newParserInstance</span><span style="color:#ABB2BF;">(MangaSource.MANGADEX)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">val</span><span style="color:#24292E;"> parser </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> mangaLoaderContext.</span><span style="color:#6F42C1;">newParserInstance</span><span style="color:#24292E;">(MangaSource.MANGADEX)</span></span></code></pre></div></div><p><code>mangaLoaderContext</code> є реалізацією класу<code>MangaLoaderContext</code>.</p><p>Дивіться приклади <a href="https://github.com/KotatsuApp/Kotatsu/blob/devel/app/src/main/java/org/koitharu/kotatsu/core/parser/MangaLoaderContextImpl.kt" target="_blank" rel="noreferrer">Android</a> та <a href="https://github.com/KotatsuApp/kotatsu-dl/blob/master/src/main/kotlin/org/koitharu/kotatsu_dl/env/MangaLoaderContextImpl.kt" target="_blank" rel="noreferrer">Non-Android</a> реалізації.</p><p>Зверніть увагу, що парсери <code>MangaSource.LOCAL</code> та <code>MangaSource.DUMMY</code> не можуть бути використані в якості екземплярів.</p><h2 id="vdmova-vd-vdpovdalnost-zgdno" tabindex="-1">Відмова від відповідальності згідно DMCA <a class="header-anchor" href="#vdmova-vd-vdpovdalnost-zgdno" aria-label="Permalink to &quot;Відмова від відповідальності згідно DMCA&quot;">​</a></h2><p>Розробники цього додатку не мають жодного відношення до контенту, доступного в додатку. Він зібраний з джерел, вільно доступних через будь-який веб-браузер.</p>`,15),l=[p];function t(r,c,i,d,y,u){return n(),a("div",null,l)}const v=s(e,[["render",t]]);export{B as __pageData,v as default};