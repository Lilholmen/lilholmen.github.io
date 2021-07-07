var activeDate = new Date(0,0,0);

window.onload = function (ev) {
    document.getElementById("calendar").appendChild(getDivWithYearController());
    calendar_show(3,2018);
    document.getElementById("selectYear").onchange = updateCalendar;
    document.getElementById("selectMonth").onchange = updateCalendar;
};

function setActiveDay(event) {
    var a = event.currentTarget;
    var s1 = document.getElementById("selectMonth"),
        s2 = document.getElementById("selectYear");
    activeDate = new Date(s2.options[s2.selectedIndex].innerText,
        getMonthNum(s1.options[s1.selectedIndex].innerText),
        a.innerText);
    updateCalendar();
    var age = getAge(activeDate);
    if (age<0) age="";
    document.getElementById("age").innerText = "Ваш возраст: " + age;
}

function updateCalendar(){
    var s1 = document.getElementById("selectMonth"),
        s2 = document.getElementById("selectYear");
    calendar_show(getMonthNum(
        s1.options[s1.selectedIndex].innerText),
        s2.options[s2.selectedIndex].innerText);
}

function calendar_show(m, y){
    document.getElementById("calendar").removeChild(document.getElementById("table"));
    var sdate= new Date(y,m,0);
    var days=dayonmonth(m,y);
    var iday=0, day;

    var table = document.createElement("table"),
        tableRow = document.createElement("tr");
    table.className = "calendar";
    table.id = "table";
    var WeekTitles= ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];

    WeekTitles.forEach(function (value) {
            td = document.createElement("td");
        td.innerText = value;
        tableRow.appendChild(td);
    });
    table.appendChild(tableRow);
    tableRow = document.createElement("tr");

    for(day=0;day<sdate.getDay();day++){
        iday++;
        var th = document.createElement("th");
        tableRow.appendChild(th);
    }
    for(day=1;day<=days;day++){
        if(iday===7){
            table.appendChild(tableRow);
            tableRow = document.createElement("tr");
            iday=0;
        }
        iday++;
        td = document.createElement("td");
        var a = document.createElement("a");
        if (day == activeDate.getDate()&& y == activeDate.getFullYear()
            && activeDate.getMonth() == m){
            a.id = "activeDay";
        }
        a.innerText = day.toString();
        a.addEventListener("click", setActiveDay, true);
        td.appendChild(a);
        tableRow.appendChild(td);
    }
    table.appendChild(tableRow);
    document.getElementById("calendar").appendChild(table);
}

function dayonmonth(m, y){
    switch (m){
        case 0: return 31;
        case 1: return (y%4 === 0)?28:27;
        case 2: return 31;
        case 3: return 30;
        case 4: return 31;
        case 5: return 30;
        case 6: return 31;
        case 7: return 31;
        case 8: return 30;
        case 9: return 31;
        case 10: return 30;
        case 11: return 31;
    }
}

function getDivWithYearController() {
    div = document.createElement("div");
    var yearsArray,
        selectYear = document.createElement("select"),
        selectMonth = document.createElement("select"),
        months = ["январь","февраль","март","апрель",
            "май","июнь","июль","август","сентябрь","октябрь"
            ,"ноябрь","декабрь"];
    selectYear.id = "selectYear";
    selectMonth.id = "selectMonth";

    for (var i = 1900; i < 2020; i++){
        var option = document.createElement("option");
        option.innerText = i.toString();
        selectYear.appendChild(option);
    }

    months.forEach(function (value) {
        var option = document.createElement("option");
        option.innerText = value;
        selectMonth.appendChild(option);
    });

    selectMonth.selectedIndex = 3;
    selectYear.selectedIndex = 118;
    div.appendChild(selectMonth);
    div.appendChild(selectYear);

    return div;
}

function getMonthNum(name){
    switch (name){
        case "январь": return 0;
        case "февраль": return 1;
        case "март": return 2;
        case "апрель": return 3;
        case "май": return 4;
        case "июнь": return 5;
        case "июль": return 6;
        case "август": return 7;
        case "сентябрь": return 8;
        case "октябрь": return 9;
        case "ноябрь": return 10;
        case "декабрь": return 11;
    }
}

function getAge(date){
    d = new Date();
    var age = d.getFullYear() - date.getFullYear();
    if (d.getMonth() < date.getMonth()||
        (d.getMonth()===date.getMonth() && d.getDate() < date.getDate())){
        age--;
    }
    return age;
}