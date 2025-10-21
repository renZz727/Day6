function passwordChecker(password) {
    spclChars = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', ',', '.', '/', '?' ];
    numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    includesSpcl = includesLower = includesUpper = includesNumber = false;
    for(let i = 0;i < password.length;i++ ){
        if(spclChars.includes(password[i]))
            includesSpcl = true;
        if(password.includes(password[i].toUpperCase()))
            includesUpper = true;
        if(password.includes(password[i].toLowerCase()))
            includesLower = true;
        if(numbers.includes(password[i]))
            includesNumber = true;
    }

    if((password.length > 8) && includesSpcl && includesLower && includesUpper && includesNumber) {
        console.log("The password is Strong")
    } else if ((password.length > 7) && (includesNumber || includesSpcl)) {
        console.log("The password is Medium");
    } else {
        console.log("The password is weak");
    }
}

passwordChecker("RenZ72343js@123");
passwordChecker("password7");
passwordChecker("password");