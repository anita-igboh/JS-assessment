var userName = prompt("Who's there?");
if (userName == "Admin") {
    let password = prompt("please input your password");
    if (password == "TheMaster") {
        alert("Welcome Admin");
    } else if (password == null) {
        alert("Canceled");
    } else {alert("Wrong password");
}
} else if (userName == null) {
    alert("Canceled");
} else {alert("I don't know you");
}








