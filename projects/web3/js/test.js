function CheckForm(){
    var FIO = document.getElementById('testFIO');
    var errorText = document.getElementById('errorFIOtest');

    var test3 = document.getElementById('textAreaQuestion3');
    var errorTextArea = document.getElementById('errorTextArea');

    event.preventDefault();
    if (!ValidateFIOform(FIO.value))
    {
        FIO.style.border = "1px solid #bf1300";
        FIO.focus();
        errorText.style.visibility = "visible";
    } else {
        FIO.style.border = "1px solid #00ff00";
        errorText.style.visibility = "hidden";
    }
    if (!ValidateTextArea(test3.value))
    {
        test3.style.border = "1px solid #bf1300";
        test3.focus();
        errorTextArea.style.visibility = "visible";
    } else {
        test3.style.border = "1px solid #00ff00";
        errorTextArea.style.visibility = "hidden";
    }
}

function ValidateFIOform(FIO) {
    if(FIO.split(" ").length === 3){
        return true;
    }
    else
        return false;
}

function ValidateTextArea(massage) {
    if (/\d/.test(massage))
    {
        return true;
    }
    else
        return false;
}