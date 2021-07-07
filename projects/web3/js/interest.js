  window.onload = function List(){
    var firstAnchor = document.getElementById('firstAnchor');
    var secondAnchor = document.getElementById('secondAnchor');
    var thirdAnchor = document.getElementById('thirdAnchor');
    var fourthAnchor = document.getElementById('fourthAnchor');

    firstAnchor.innerHTML = createList ( "Tation putant",
                                         "Te posse homero",
                                         "Quas doming has ut",
                                         "Insolens principes",
                                         "Novum adolescens",
                                         "Mea no nostrum");

     secondAnchor.innerHTML = createList ( "Tation putant",
                                           "Te posse homero",
                                           "Quas doming has ut",
                                            "Mea no nostrum");

     thirdAnchor.innerHTML = createList( "Tation putant",
                                         "Te posse homero",
                                         "Quas doming has ut",
                                         "Insolens principes",
                                         "Novum adolescens",
                                         "Quas doming has ut",
                                         "Insolens principes",
                                         "Novum adolescens",
                                         "Mea no nostrum");

     fourthAnchor.innerHTML = createList( "Tation putant",
                                          "Mea no nostrum");
};

function createList() {
    var resultList = "<ol>";
    for (var i = 0; i < arguments.length; i++) {
    resultList += "<li>" + arguments[i] + "</li>";
    }
    return resultList + "</ol>";
}

