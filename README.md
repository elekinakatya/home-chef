# Home Chef — Recipes App

Frontend-приложение для просмотра и поиска рецептов на основе публичного API TheMealDB.
Проект написан на React + TypeScript, использует Vite для сборки и Redux Toolkit Query для работы с API.

Приложение можно запускать как локально, так и в изолированном Docker-контейнере.

---

## Функциональность

* Просмотр списка рецептов по категориям
* Поиск рецептов по названию
* Фильтрация по стране 
* Страница детального рецепта
* Ингредиенты и инструкции приготовления
* Навигация с помощью react-router-dom

---

## Стек технологий

* React 18
* TypeScript
* Vite
* Redux Toolkit / RTK Query
* React Router v6
* CSS Modules
* Docker + Nginx

---

## API

Приложение использует публичный API TheMealDB: [https://www.themealdb.com/](https://www.themealdb.com/)

---

## Запуск проекта локально (без Docker)

```bash
npm install
npm run dev
```

После этого приложение будет доступно по адресу:

```
http://localhost:5173
```

---

## Запуск проекта через Docker

### Сборка Docker-образа

В корне проекта выполните команду:

```bash
docker build -t home-chef .
```

### Запуск контейнера

```bash
docker run -p 3000:80 home-chef
```

После запуска приложение будет доступно по адресу:

```
http://localhost:3000
```

### Маршруты приложения

* `/recipes` — список рецептов
* `/recipes/:id` — страница конкретного рецепта
