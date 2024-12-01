# Тестовое задание Luxms

![Luxms](https://i.ibb.co/v1TLPyL/photo-2024-11-24-16-29-00.jpg)

Демо: https://luxms-test-qqnz.vercel.app/

## О проекте

Тестовое задание выполнялось с помощью:

- React
- Next.js
- TypeScript
- Tailwind CSS

Деплой проекта выполнен на платформе [Vercel](https://vercel.com/).

Время выполнения: 6 часов

## Установка и запуск

### 1. Клонируйте репозиторий

```bash
git clone https://github.com/AliceHab/luxms-test.git
```

### 2. Перейдите в директорию проекта

```bash
cd luxms-test
```

### 3. Установите зависимости

```bash
pnpm install
```
pnpm вместо npm или yarn дает большую скорость установки

### 4. Запустите проект локально

```bash
pnpm dev
```

Проект будет доступен по адресу http://localhost:3000.


## Примеры

В задании указано 5 адресов, по которым можно получить данные:
- https://rcslabs.ru/ttrp1.json
- https://rcslabs.ru/ttrp2.json
- https://rcslabs.ru/ttrp3.json
- https://rcslabs.ru/ttrp4.json
- https://rcslabs.ru/ttrp5.json

Они реализованы под инстансами в формате кнопок "1 вариант", "2 вариант". Также переключение доступно через меню, напротив заголовка (историческая условность (⌒_⌒;) )

## To-do

- Не хардкодить количество инстансов (сейчас строго три), а выводить на основе даты
- Поработать с типизацией
