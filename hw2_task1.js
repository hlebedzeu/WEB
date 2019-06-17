$(document).ready(function(){
    openPopup("What is your user name?");
 });

function openPopup(promptText) {
    var output = "";
    var userName = prompt(promptText);

        if (userName) {
            if (containsNumber(userName)) {
                output = reverseUserName(userName);
            } else {
                output = changeUserNameCase(userName);
            }
        } else openPopup("User Name cannot be empty");
        document.getElementById("userName").innerHTML = output;
    }

function onClickGoGoogle() {
    location.replace("https://www.google.com/");
}

function onClickDeleteAll() {
    document.getElementById("inner").innerHTML = "";
}

function containsNumber(userName) {
    var hasNumber = /\d/;
    return hasNumber.test(userName);
}

function reverseUserName(userName) {
    var splitString = userName.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");

    return joinArray;
}

function changeUserNameCase(userName) {
   var resultString = "";

    for (var i = 0; i < userName.length; i++) {
        if (userName.charAt(i) === userName.charAt(i).toLowerCase()) {
            resultString += userName.charAt(i).toUpperCase();
        } else if (userName.charAt(i) === userName.charAt(i).toUpperCase()) {
            resultString += userName.charAt(i).toLowerCase()
        }
    }
    return resultString;
}