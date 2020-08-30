## Installation 🚀

Go to **/bdb** directory

Use docker to install container with node js v14.

```bash
docker build -t bdb .
```
Use docker-compose to init container.

```bash
docker-compose build
```
Start the rest server api with the command

```bash
docker-compose up
```
The API rest url's :

```bash
http://localhost:8081/read
```

```bash
http://localhost:8081/create

```
```bash
http://localhost:8081/delete
```
