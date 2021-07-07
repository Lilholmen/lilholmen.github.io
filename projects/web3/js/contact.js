document.getElementById("name").addEventListener("blur", validName);
document.getElementById("phone").addEventListener("blur",validPhone);
document.getElementById("mail").addEventListener("blur",validMail);
document.getElementById("name").addEventListener("focus",function (ev) {
    document.getElementById("name").className="";
});
document.getElementById("phone").addEventListener("focus",function (ev) {
    document.getElementById("phone").className="";
});
document.getElementById("mail").addEventListener("focus",function (ev) {
    document.getElementById("mail").className="";
});
setSendDisable();

var genderMan = document.contact.gender[0];
genderMan.setAttribute("checked", "");

function valid(evt) {
    var phone = document.getElementById("phone"),
        name = document.getElementById("name"),
        regPhone = new RegExp("^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$"),
        regName = new RegExp("^[А-ЯA-Z][а-яa-zА-ЯA-Z\\-]{1,}\\s[А-ЯA-Z][а-яa-zА-ЯA-Z\\-]{1,}(\\s[А-ЯA-Z][а-яa-zА-ЯA-Z\\-]{1,})?$");

    if (!regPhone.test(phone.value)){
        phone.className = "error";
        evt.preventDefault();
        phone.focus();
    }
    if (!regName.test(name.value)){
        name.className = "error";
        evt.preventDefault();
        name.focus();
    }
}

function validName(){
    var regName = new RegExp("^[А-ЯA-Z][а-яa-zА-ЯA-Z\\-]{1,}\\s[А-ЯA-Z][а-яa-zА-ЯA-Z\\-]{1,}(\\s[А-ЯA-Z][а-яa-zА-ЯA-Z\\-]{1,})?$"),
        name = document.getElementById("name");

    if (!regName.test(name.value)){
        name.className = "error";
        setSendDisable();
    }
    else{
        name.className = "success";
        checkSend();
    }
}

function validPhone() {
    var phone = document.getElementById("phone"),
        regPhone = new RegExp("^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$");

        if (!regPhone.test(phone.value)){
        phone.className = "error";
        setSendDisable();
    }
    else{
            phone.className = "success";
            checkSend();
        }
}

function validMail() {
    var mail = document.getElementById("mail"),
        regMail = new RegExp("^[A-Za-z0-9][A-Za-z0-9\.\-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$");

    if (!regMail.test(mail.value)){
        mail.className = "error";
        setSendDisable();
    }
    else{
        mail.className = "success";
        checkSend();
    }
}

function setSendDisable() {
    document.getElementById("send").setAttribute("disabled", "");
}

function checkSend() {
    if (document.getElementById("name").className === "success" &&
        document.getElementById("phone").className === "success" &&
        document.getElementById("mail").className === "success"
    ){
        document.getElementById("send").removeAttribute("disabled");
    }
}