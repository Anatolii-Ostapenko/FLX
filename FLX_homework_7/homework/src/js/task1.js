let password;
let login = prompt("Please enter your login", "");
if(login === "" || login === null){
    alert("Canceled."); 
}else if(login.length < 4){
    alert("I don't know any users having name length less than 4 symbols");
}else if(login === "User" || login === "Admin"){
    password = prompt("Please enter your password", "");
    if(password === "" || password === null){
        alert("Canceled.");
    }else if(login === "User" && password === "UserPass" || login === "Admin" && password === "RootPass"){ 
        let date = new Date().getHours();
        if(date < 20 ){
            alert ("Good day, dear "+login+"!");
        }else{
            alert("Good evening, dear "+login+"!");
        }
        }else{
            alert("Wrong password");
        }
}else{
    alert ("I don’t know you");
}

