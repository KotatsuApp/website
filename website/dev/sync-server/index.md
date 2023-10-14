---
title: Synchronization server
description: Instructions for installing the synchronization server.
---

# Synchronization server
Instructions for installing the synchronization server.

## Installation

### Docker
Build image container:

```bash
docker build github.com/KotatsuApp/kotatsu-syncserver.git -t kotatsuapp/syncserver
```
	
Run container:

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
Requirements: 
- JDK 11+
- Gradle 7.0+

Commands:

```bash
git clone https://github.com/KotatsuApp/kotatsu-syncserver.git
cd kotatsu-syncserver && ./gradlew shadowJar
```

Then edit file `kotatsu-sync.service`, change `replaceme` fields with your values and specify the `kotatsu-syncserver-0.0.1.jar` file location (it can be found in `build/libs` directory after buliding)

```bash
cp kotatsu-sync.service /etc/systemd/system
systemctl enable kotatsu-sync
systemctl daemon-reload
systemctl start kotatsu-sync
```
	
For any questions, please, contact us in [Telegram group](https://t.me/kotatsuapp) or write an issue, thanks.