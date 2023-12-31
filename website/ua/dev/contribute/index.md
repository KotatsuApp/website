---
title: Зробити внесок
description: Дізнайтеся, як допомогти у перекладі або в розробці додатку та парсерів.
footer: false
translator: CakesTwix
---

# Зробити внесок
Дізнайтеся, як допомогти у перекладі або в розробці додатку та парсерів.

## Рекомендації щодо внеску до додатку
- Якщо ви хочете виправити помилку або реалізувати нову функцію, про яку вже згадувалося в [GitHub Issues](https://github.com/KotatsuApp/Kotatsu/issues), будь ласка, призначте це питання собі та/або прокоментуйте його.
- Якщо вам потрібно впровадити нову функцію, будь ласка, відкрийте тему або обговорення щодо неї, щоб переконатися, що вона буде прийнята.
- Переклади повинні контролюватися за допомогою платформи [Weblate](https://hosted.weblate.org/engage/kotatsu/).
- Якщо ви хочете додати нове джерело манґи, зверніться до [репозиторію парсерів](https://github.com/KotatsuApp/kotatsu-parsers).

Рефакторинг або деякі покращення інтерфейсу також можуть бути прийняті, однак, будь ласка, дотримуйтесь наступних принципів:
- Швидкість роботи має значення. У випадку вибору між красою вихідного коду та швидкістю роботи, пріоритетом має бути швидкість роботи додатка. 
- Будь ласка, не змінюйте README.md та інші *.md (за винятком усунення помилок).
- Уникайте додавання нових залежностей без необхідності. Розмір APK важливий.

## Настанови щодо внеску до репозиторію парсерів
Нижче наведено настанови щодо створення парсеру Kotatsu. Дякуємо, що знайшли час для участі!

### Передумови для участі
Перед початком зауважте, що вміння користуватися наведеними нижче технологіями є **необхідним**.

- Базові знання [розробки під Android](https://developer.android.com/)
- [Kotlin](https://kotlinlang.org/)
- Web scraping ([JSoup](https://jsoup.org/)) або JSON API

#### Інструменти

- [Android Studio](https://developer.android.com/studio)
- [IntelliJ IDEA](https://www.jetbrains.com/idea/) (Community edition є достатнім для розробки)
- Android-пристрій (або емулятор)

Парсери Kotatsu не є частиною додатку для Android, але ви можете легко розробити і протестувати його безпосередньо в проекті додатку для Android
і перемістити його до проекту бібліотеки, коли це буде готове.

#### Перш ніж почати

Спочатку подивіться на структуру проекту `kotatsu-parsers`. Кожен парсер є окремим класом, який
розширює клас `MangaParser` і має анотацію `MangaSourceParser`.
Також зверніть увагу на розширення в пакеті `util`. Наприклад, розширення з файлу `Jsoup`
слід використовувати замість існуючих функцій JSoup, тому що вони мають кращу підтримку nullability значень
та покращені повідомлення про помилки.

### Написання парсеру

Отже, ви хочете створити парсер, який надаватиме доступ до манґи з веб-сайту.
По-перше, вам слід дослідити веб-сайт на предмет наявності API.
Якщо він не містить жодної документації про
API, то [дослідіть мережеві запити](https://firefox-source-docs.mozilla.org/devtools-user/):
деякі сайти використовують ajax.

- [Наприклад](https://github.com/KotatsuApp/kotatsu-parsers/blob/master/src/main/kotlin/org/koitharu/kotatsu/parsers/site/ru/DesuMeParser.kt)
  використання Json API.
- [Наприклад](https://github.com/KotatsuApp/kotatsu-parsers/blob/master/src/main/kotlin/org/koitharu/kotatsu/parsers/site/be/AnibelParser.kt)
  використання API GraphQL
- [Example](https://github.com/KotatsuApp/kotatsu-parsers/blob/master/src/main/kotlin/org/koitharu/kotatsu/parsers/site/en/MangaTownParser.kt)
  чистого парсингу HTML.

Якщо сайт побудований на якомусь движку, раціонально використовувати загальний для нього базовий клас (наприклад, Madara wordpress
тема
і клас `MadaraParser`)

#### Скелет класу парсеру

Клас Parser повинен мати рівно один первинний параметр конструктора типу `MangaLoaderContext` і мати анотацію
`MangaSourceParser` яка містить внутрішню назву, заголовок та мову джерела манґи.

Всі функції класу `MangaParser` задокументовані. Зверніть увагу на деякі особливості:

- Ніколи не задавайте домен hardcod'ом. Вкажіть домен за замовчуванням у полі `configKeyDomain` і отримайте актуальний домен за допомогою `getDomain()`.
- Всі ідентифікатори повинні бути унікальними і не залежати від домену. Використовуйте функцію `generateUid` з відносним посиланням або внутрішнім ідентифікатором,
  який є унікальним у всьому джерелі манґи.
- Параметр `sortOrders не повинен бути порожнім. Якщо ваше джерело не підтримує сортування, вкажіть одне найбільш релевантне значення.
- Якщо ви не можете отримати прямі посилання на зображення сторінок у методі `getPages`, ви можете використати проміжний адрес як `Page.url` і отримати пряме 
  посилання у функції `getPageUrl`.
- Ви можете використовувати _asserts_ для перевірки деяких необов'язкових полів. Наприклад. 
  Поле `Manga.author` не є обов'язковим, але якщо ваше джерело містить таку інформацію, додайте `assert(it != null)`. 
  Це не вплине на роботу додатку, але допоможе знайти проблеми під час модульного тестування.
- Якщо на сайті (або його api) для пагінації використовуються сторінки, а не зміщення, вам слід використовувати `PagedMangaParser` замість `MangaParser`.
- Ваш парсер може також реалізувати інтерфейс `Interceptor` для додаткової маніпуляції з усіма мережевими запитами та/або відповідями, 
  включаючи завантаження зображень.

### Процес розробки

Під час розробки рекомендується (але не обов'язково) писати його безпосередньо у проекті програми Kotatsu для Android. 
Ви можете використовувати клас `core.parser.DummyParser` як пісочницю. Манґа `Dummy` доступний у debug збірці Kotatsu.

Після того, як парсер буде готовий, ви можете перемістити ваш код у проект бібліотеки `kotatsu-parsers` у пакеті `site` і створити Pull Request.

#### Тестування

Перед відправкою PR рекомендується провести юніт-тести.

- Тимчасово змініть клас анотації `MangaSources`: вкажіть ім'я вашого(их) парсеру(ів) та змініть режим на `EnumSource.Mode.INCLUDE`.
- Запустіть `MangaParserTest
```bash
gradlew :test --tests "org.koitharu.kotatsu.parsers.MangaParserTest"
```
- За бажанням ви можете запустити gradle-завдання `generateTestsReport`, щоб отримати досить читабельний html-звіт за результатами тестування.

## Допомога

Якщо вам потрібна допомога або у вас є запитання, зверніться до спільноти в нашому [Телеграм-чаті](https://t.me/kotatsuapp)
або на [Discord-сервері](https://discord.gg/NNJ5RgVBC5).
