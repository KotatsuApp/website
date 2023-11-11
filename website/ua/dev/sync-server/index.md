---
title: Сервер синхронізації
description: Instructions for installing the synchronization server.
footer: false
translator: CakesTwix
---

# Сервер синхронізації
Інструкція по встановленню сервера синхронізації.

## Встановлення

### Docker
Зберіть Docker контейнер:

```bash
docker build github.com/KotatsuApp/kotatsu-syncserver.git -t kotatsuapp/syncserver
```
	
Запустіть контейнер:

```bash
docker run -d -p 8081:8080 \
-e DATABASE_HOST=your_db_host \
-e DATABASE_USER=your_db_user \
-e DATABASE_PASSWORD=your_db_password \
-e DATABASE_NAME=your_db_name \
-e DATABASE_PORT=your_db_port \
-e JWT_SECRET=your_secret \
--restart always \
--name kotatsu-sync kotatsuapp/syncserver
```

### Systemd
Вимоги: 
- JDK 11+
- Gradle 7.0+

Команди:

```bash
git clone https://github.com/KotatsuApp/kotatsu-syncserver.git
cd kotatsu-syncserver && ./gradlew shadowJar
```

Потім відредагуйте файл `kotatsu-sync.service`, змініть поля `replaceme` на ваші значення і вкажіть розташування файлу `kotatsu-syncserver-*.jar` (його можна знайти в каталозі `build/libs` після збірки)

```bash
cp kotatsu-sync.service /etc/systemd/system
systemctl enable kotatsu-sync
systemctl daemon-reload
systemctl start kotatsu-sync
```
	
З будь-яких питань, будь ласка, зв'яжіться з нами в [Телеграм групі](https://t.me/kotatsuapp) або напишіть [Issue](https://github.com/KotatsuApp/kotatsu-syncserver/issues) у GitHub, дякуємо.
