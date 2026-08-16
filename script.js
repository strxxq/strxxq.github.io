/*
  ============================
  МЕНЯТЬ САЙТ ПРОЩЕ ВСЕГО ЗДЕСЬ
  ============================

  1) games — твои игры и достижения.
  2) achievements — отдельные достижения.
  3) anime — любимые аниме.
  4) about — текст и информация о тебе.

  Картинки положи в папку assets.
  Например: assets/cs2.jpg
*/

const about = {
  paragraphs: [
    "Ну нравиться коллекционировать игры в стіиме.",
    "что писать? ну играю в компьютер смотрю твич и аниме."
  ],
  highlight: "Цитата дня сухарики снекинг.",
  facts: [
    ["Ник", "strxxq"],
    ["Занятие", "Строитель"],
    ["Музыкальные исполнители", "Violent Vira, Juice wrld, Amira Elfeky"],
    ["Цель", "BMW 428i Gran Coupe"]
  ]
};

const games = [
  { name:"CS2", image:"assets/game1.jpg", achievement:"FACEIT Level 5", time:"1100+ часов" },
  { name:"DOTA 2", image:"assets/game2.jpg", achievement:"1500mmr", time:"1300+ часов" },
  { name:"VALORANT", image:"assets/game3.jpg", achievement:"gold 1", time:"200+ часов" },
  { name:"APEX LEGENDS", image:"assets/game4.jpg", achievement:"Platinum IV", time:"400+ часов" },
  { name:"BRAWL STARS", image:"assets/game5.jpg", achievement:"50,000+", time:"кубков" }
];

const achievements = [
  { title:"Моё первое большое достижение", text:"Прошел Hollow Knight на все достижения ну и все хватит ." },
  { title:"Лучший игровой момент", text:"1500 птс в доте." },
  { title:"Новый рекорд", text:"похуй." }
];

const anime = [
  { name:"Hunter", image:"assets/anime1.jpg", text:"Охота за мечтой." },
  { name:"Death Note", image:"assets/anime2.jpg", text:"Скука убивает людей." },
  { name:"Attack on Titan", image:"assets/anime3.jpg", text:"Свобода за стенами." },
  { name:"Jujutsu Kaisen", image:"assets/anime4.jpg", text:"Сильнейший — одинок." },
  { name:"Demon Slayer", image:"assets/anime5.jpg", text:"Дыхание и воля." }
];

function imgOrPlaceholder(path, label){
  return `<img src="${path}" alt="${label}" onerror="this.style.display='none'; this.parentElement.innerHTML='<span class="empty">ДОБАВЬ КАРТИНКУ</span>'">`;
}

document.querySelector("#aboutText").innerHTML =
  about.paragraphs.map(p => `<p>${p}</p>`).join("") +
  `<p class="highlight">${about.highlight}</p>`;

document.querySelector("#facts").innerHTML =
  about.facts.map(([k,v]) => `<div class="fact"><b>${k}</b><span>${v}</span></div>`).join("");

document.querySelector("#gamesGrid").innerHTML = games.map(g => `
  <article class="game-card">
    <div class="game-img">${imgOrPlaceholder(g.image,g.name)}</div>
    <div class="game-name">${g.name}</div>
    <div class="game-ach">${g.achievement}</div>
    <div class="game-time">${g.time}</div>
  </article>
`).join("");

document.querySelector("#achievementList").innerHTML = achievements.map((a,i) => `
  <article class="achievement">
    <div class="num">ACHIEVEMENT 0${i+1}</div>
    <h3>🏆 ${a.title}</h3>
    <p>${a.text}</p>
  </article>
`).join("");

document.querySelector("#animeGrid").innerHTML = anime.map(a => `
  <article class="anime-card">
    <div class="anime-img">${imgOrPlaceholder(a.image,a.name)}</div>
    <div class="anime-body"><h3>${a.name}</h3><p>${a.text}</p></div>
  </article>
`).join("");

document.querySelector("#gamesMore").onclick = () =>
  alert("Добавляй новые игры в массив games в файле script.js.");

document.querySelector("#animeMore").onclick = () =>
  alert("Добавляй новые аниме в массив anime в файле script.js.");
