# Сайт strxxq

## Самое главное: как менять сайт

Почти всё, что тебе понадобится менять, находится в **`script.js`**.

Открой `script.js` и сверху увидишь 4 блока:
- `about` — текст о себе;
- `games` — игры;
- `achievements` — достижения;
- `anime` — любимые аниме.

### 1. Как поменять игру

Найди:

```js
const games = [
  { name:"CS2", image:"assets/game1.jpg", achievement:"FACEIT Level 8", time:"1200+ часов" },
];
```

Например, можно сделать:

```js
{ name:"Minecraft", image:"assets/minecraft.jpg", achievement:"1000+ дней", time:"2000+ часов" },
```

После этого положи картинку `minecraft.jpg` в папку **assets**.

### 2. Как поменять аниме

Найди `const anime = [` и меняй:

```js
{ name:"Naruto", image:"assets/anime1.jpg", text:"Сила в терпении." },
```

на своё:

```js
{ name:"Chainsaw Man", image:"assets/chainsaw.jpg", text:"Мой любимый персонаж — Резе." },
```

Картинку `chainsaw.jpg` тоже положи в `assets`.

### 3. Как добавить ещё одну игру

Просто добавь ещё одну строку перед `];`:

```js
{ name:"Rust", image:"assets/rust.jpg", achievement:"500 часов", time:"500+ часов" },
```

### 4. Как добавить ещё одно аниме

То же самое:

```js
{ name:"Bleach", image:"assets/bleach.jpg", text:"Любимый персонаж — ..." },
```

### 5. Как поменять текст о себе

В `const about = {` меняй `paragraphs`, `highlight` и `facts`.

Возраст специально НЕ используется.

## Картинки

Для игр:
`assets/game1.jpg`, `game2.jpg`, `game3.jpg`, `game4.jpg`, `game5.jpg`

Для аниме:
`assets/anime1.jpg`, `anime2.jpg`, `anime3.jpg`, `anime4.jpg`, `anime5.jpg`

Главный персонаж уже добавлен как:
`assets/reze.webp`

Если хочешь другой файл — замени `reze.webp` или поменяй путь в `index.html`.

## Как залить на GitHub

1. Создай новый репозиторий на GitHub.
2. Загрузи `index.html`, `style.css`, `script.js` и папку `assets`.
3. Репозиторий → **Settings** → **Pages**.
4. **Deploy from a branch** → ветка `main` → папка `/ (root)`.
5. **Save**.
6. Через некоторое время GitHub покажет ссылку на сайт.

Ничего устанавливать для самого сайта не нужно.
