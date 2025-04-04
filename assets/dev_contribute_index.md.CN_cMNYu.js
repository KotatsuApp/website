import{m as t,b as a,e as o,a6 as r}from"./chunks/framework.DpsY3XTg.js";const h=JSON.parse('{"title":"Contribute","description":"Find out how to help translate or build the app and parsers.","frontmatter":{"title":"Contribute","description":"Find out how to help translate or build the app and parsers.","footer":false},"headers":[],"relativePath":"dev/contribute/index.md","filePath":"dev/contribute/index.md","lastUpdated":1743672639000,"breadcrumbs":[{"text":"For developers","items":[{"text":"Contribute","link":"/dev/contribute/"},{"text":"Parsers library","link":"/dev/parsers-library/"},{"text":"Synchronization server","link":"/dev/sync-server/"},{"text":"External plugins SDK","link":"/dev/plugin-sdk/"}]},{"text":"Contribute","link":"/dev/contribute/"}]}'),i={name:"dev/contribute/index.md"};function s(n,e,l,d,u,c){return o(),a("div",null,e[0]||(e[0]=[r('<h1 id="contribute" tabindex="-1">Contribute <a class="header-anchor" href="#contribute" aria-label="Permalink to &quot;Contribute&quot;">​</a></h1><p>Find out how to help translate or build the app and parsers.</p><h2 id="app-contribution-guidelines" tabindex="-1">App contribution guidelines <a class="header-anchor" href="#app-contribution-guidelines" aria-label="Permalink to &quot;App contribution guidelines&quot;">​</a></h2><ul><li>If you want to fix bug or implement a new feature, that already mention in the <a href="https://github.com/KotatsuApp/Kotatsu/issues" target="_blank" rel="noreferrer">issues</a>, please, assign this issue to you and/or comment about it.</li><li>Whether you have to implement new feature, please, open an issue or discussion regarding it to ensure it will be accepted.</li><li>Translations have to be managed using the <a href="https://hosted.weblate.org/engage/kotatsu/" target="_blank" rel="noreferrer">Weblate</a> platform.</li><li>In case you want to add a new manga source, refer to the <a href="https://github.com/KotatsuApp/kotatsu-parsers" target="_blank" rel="noreferrer">parsers repository</a>.</li></ul><p>Refactoring or some dev-faces improvements are also might be accepted, however please stick to the following principles:</p><ul><li>Performance matters. In the case of choosing between source code beauty and performance, performance should be a priority.</li><li>Please, do not modify readme and other information files (except for typos).</li><li>Avoid adding new dependencies unless required. APK size is important.</li></ul><h2 id="parsers-contribution-guidelines" tabindex="-1">Parsers contribution guidelines <a class="header-anchor" href="#parsers-contribution-guidelines" aria-label="Permalink to &quot;Parsers contribution guidelines&quot;">​</a></h2><p>The following is guide for creating a Kotatsu parsers. Thanks for taking the time to contribute!</p><h3 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h3><p>Before you start, please note that the ability to use the following technologies is <strong>required</strong>.</p><ul><li>Basic <a href="https://developer.android.com/" target="_blank" rel="noreferrer">Android development</a></li><li><a href="https://kotlinlang.org/" target="_blank" rel="noreferrer">Kotlin</a></li><li>Web scraping (<a href="https://jsoup.org/" target="_blank" rel="noreferrer">JSoup</a>) or JSON API</li></ul><h4 id="tools" tabindex="-1">Tools <a class="header-anchor" href="#tools" aria-label="Permalink to &quot;Tools&quot;">​</a></h4><ul><li><a href="https://developer.android.com/studio" target="_blank" rel="noreferrer">Android Studio</a></li><li><a href="https://www.jetbrains.com/idea/" target="_blank" rel="noreferrer">IntelliJ IDEA</a> (Community edition is enough)</li><li>Android device (or emulator)</li></ul><p>Kotatsu parsers are not a part of the Android application, but you can easily develop and test it directly inside an Android application project and relocate it to the library project when done.</p><h3 id="before-you-start" tabindex="-1">Before you start <a class="header-anchor" href="#before-you-start" aria-label="Permalink to &quot;Before you start&quot;">​</a></h3><p>First, take a look at the <code>kotatsu-parsers</code> project structure. Each parser is a single class that extends the <code>MangaParser</code> class and has a <code>MangaSourceParser</code> annotation. Also, pay attention to extensions in the <code>util</code> package. For example, extensions from the <code>Jsoup</code> file should be used instead of existing JSoup functions because they have better nullability support and improved error messages.</p><h3 id="writing-your-parser" tabindex="-1">Writing your parser <a class="header-anchor" href="#writing-your-parser" aria-label="Permalink to &quot;Writing your parser&quot;">​</a></h3><p>So, you want to create a parser, that will provide access to manga from a website. First, you should explore a website to learn about API availability. If it does not contain any documentation about API, <a href="https://firefox-source-docs.mozilla.org/devtools-user/" target="_blank" rel="noreferrer">explore network requests</a>: some websites use AJAX.</p><ul><li><a href="https://github.com/KotatsuApp/kotatsu-parsers/blob/master/src/main/kotlin/org/koitharu/kotatsu/parsers/site/ru/DesuMeParser.kt" target="_blank" rel="noreferrer">Example</a> of Json API usage.</li><li><a href="https://github.com/KotatsuApp/kotatsu-parsers/blob/master/src/main/kotlin/org/koitharu/kotatsu/parsers/site/be/AnibelParser.kt" target="_blank" rel="noreferrer">Example</a> of GraphQL API usage</li><li><a href="https://github.com/KotatsuApp/kotatsu-parsers/blob/master/src/main/kotlin/org/koitharu/kotatsu/parsers/site/en/MangaTownParser.kt" target="_blank" rel="noreferrer">Example</a> of pure HTML parsing.</li></ul><p>If the website is based on some engine it is rationally to use a common base class for this one (for example, Madara Wordpress theme and the <code>MadaraParser</code> class)</p><h4 id="parser-class-skeleton" tabindex="-1">Parser class skeleton <a class="header-anchor" href="#parser-class-skeleton" aria-label="Permalink to &quot;Parser class skeleton&quot;">​</a></h4><p>The parser class must have exactly one primary constructor parameter of type <code>MangaLoaderContext</code> and have an <code>MangaSourceParser</code> annotation that provides the internal name, title, and language of a manga source.</p><p>All members of the <code>MangaParser</code> class are documented. Pay attention to some peculiarities:</p><ul><li>Never hardcode domain. Specify the default domain in the <code>configKeyDomain</code> field and obtain an actual one using <code>domain</code>.</li><li>All IDs must be unique and domain-independent. Use <code>generateUid</code> functions with a relative URL or some internal id that is unique across the manga source.</li><li>The <code>availableSortOrders</code> set should not be empty. If your source does not support sorting, specify one most relevant value.</li><li>If you cannot obtain direct links to page images inside the <code>getPages</code> method, it is ok to use an intermediate URL as <code>Page.url</code> and fetch a direct link in the <code>getPageUrl</code> function.</li><li>You can use <em>asserts</em> to check some optional fields. For example, the <code>Manga.author</code> field is not required, but if your source provides this information, add <code>assert(it != null)</code>. This will not have any effect on production but help to find issues during unit testing.</li><li>If your source website (or its API) uses pages for pagination instead of offset you should extend <code>PagedMangaParser</code> instead of <code>MangaParser</code>.</li><li>If your source website (or its API) does not provide pagination (has only one page of content) you should extend <code>SinglePageMangaParser</code> instead of <code>MangaParser</code> or <code>PagedMangaParser</code>.</li><li>Your parser may also implement the <code>Interceptor</code> interface for additional manipulation of all network requests and responses, including image loading.</li></ul><h3 id="development-process" tabindex="-1">Development process <a class="header-anchor" href="#development-process" aria-label="Permalink to &quot;Development process&quot;">​</a></h3><p>During the development, it is recommended (but not necessary) to write it directly in the Kotatsu Android application project. You can use the <code>core.parser.DummyParser</code> class as a sandbox. The <code>Dummy</code> manga source is available in the debug Kotatsu build.</p><p>Once the parser is ready you can relocate your code into the <code>kotatsu-parsers</code> library project in a <code>site</code> package and create a Pull Request.</p><h4 id="testing" tabindex="-1">Testing <a class="header-anchor" href="#testing" aria-label="Permalink to &quot;Testing&quot;">​</a></h4><p>It is recommended that unit tests be run before submitting a PR.</p><ul><li>Temporary modify the <code>MangaSources</code> annotation class: specify your parser(s) name(s) and change mode to <code>EnumSource.Mode.INCLUDE</code></li><li>Run the <code>MangaParserTest</code> (<code>gradlew :test --tests &quot;org.koitharu.kotatsu.parsers.MangaParserTest&quot;</code>)</li><li>Optionally, you can run the <code>generateTestsReport</code> gradle task to get a pretty readable html report from test results.</li></ul><h2 id="help" tabindex="-1">Help <a class="header-anchor" href="#help" aria-label="Permalink to &quot;Help&quot;">​</a></h2><p>If you need help or have some questions, ask a community in our <a href="https://t.me/kotatsuapp" target="_blank" rel="noreferrer">Telegram chat</a> or <a href="https://discord.gg/NNJ5RgVBC5" target="_blank" rel="noreferrer">Discord server</a>.</p>',32)]))}const m=t(i,[["render",s]]);export{h as __pageData,m as default};
