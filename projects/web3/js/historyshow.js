var tables = document.getElementsByClassName("tableHistory"),
    nowTable = tables[0], allTimeTable = tables[1],
    tr, td,
    titles = ["Мой персональный сайт. Главная страница","Мой персональный сайт. Обо мне", "Мой персональный сайт. Интересы",
    "Мой персональный сайт. Учеба", "Мой персональный сайт. Альбом", "Мой персональный сайт. Контакт", "Мой персональный сайт. Тест",
    "Мой персональный сайт. История"];

titles.forEach(function (value) {
   tr = document.createElement("tr");
   td = document.createElement("td");
   td.innerText = value;
   tr.appendChild(td);
   td = document.createElement("td");
   td.innerText = sessionStorage.getItem(value)||0;
   tr.appendChild(td);
   nowTable.appendChild(tr);
});

titles.forEach(function (value) {
    tr = document.createElement("tr");
    td = document.createElement("td");
    td.innerText = value;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerText = localStorage.getItem(value)||0;
    tr.appendChild(td);
    allTimeTable.appendChild(tr);
});