if (!sessionStorage.getItem("time")){
    sessionStorage.setItem("time", new Date().toString());
}

var timeNow = new Date(),
    timeLastLink = new Date(sessionStorage.getItem("time"));

if (((timeNow - timeLastLink)/60000)>15){//прошло больше 15 минут
    sessionStorage.clear()
}

sessionStorage.setItem(document.title, (parseInt(sessionStorage.getItem(document.title))+1) || "1");

localStorage.setItem(document.title, (parseInt(localStorage.getItem(document.title))+1) || "1");
