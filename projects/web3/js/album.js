var fotos = ["../img/album1.jpg", "../img/album2.jpg","../img/album3.jpg", "../img/album4.jpg",
        "../img/album5.jpg", "../img/album6.jpg","../img/album7.jpg", "../img/album8.jpg",
        "../img/album9.jpg", "../img/album10.jpg","../img/album11.jpg", "../img/album12.jpg",
        "../img/album13.jpg", "../img/album14.jpg", "../img/album15.jpg"],
    titles = ["фото 1", "фото 2","фото 3", "фото 4","фото 5", "фото 6",
        "фото 7", "фото 8","фото 9", "фото 10","фото 11", "фото 12",
        "фото 13", "фото 14","фото 15"],
    table = document.getElementById("gallery"),
    photo, img, title,
    tr=document.createElement("tr"),td;
    for (var i = 0; i < 15; i++){
        if (i%6===0){
                table.appendChild(tr);
                tr = document.createElement("tr");
                table.appendChild(tr);
        }
        img = document.createElement("img");
        img.src = fotos[i];
        title = document.createElement("h3");
        title.innerText = titles[i];
        td = document.createElement("td");
        photo = document.createElement("div");
        photo.className = "photo";
        img.addEventListener("click", showBigPhoto);
        photo.appendChild(img);
        photo.appendChild(title)
        td.appendChild(photo);
        tr.appendChild(td);
    }

function showBigPhoto(event) {
    var src = event.currentTarget["src"],
    bigPhoto = document.getElementById("bigPhoto");
    bigPhoto.innerHTML = "";
    var img = document.createElement("img");
    img.src = src;
    bigPhoto.appendChild(img);
    img = document.createElement("img");
    var div = document.createElement("div");
    div.id = "closePhoto";
    img.src = "../img/close.png";
    div.appendChild(img);
    img.addEventListener("click", closePhoto);
    bigPhoto.appendChild(div);
}

function closePhoto() {
    document.getElementById("bigPhoto").innerHTML = "";
}