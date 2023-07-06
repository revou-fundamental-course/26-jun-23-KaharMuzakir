document.addEventListener("DOMContentLoaded", function(){
    fields.yourname = document.getElementById('yourname');
    fields.email = document.getElementById('email');
    fields.number = document.getElementById('number');
    fields.option = document.getElementById('option');
    fields.message = document.getElementById('message');
})

function isNotEmty(value) {
    if (value == null || typeof value =='undefined') return false;

    return (value.length > 0);
}

function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }

function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.yourname, isNotEmty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.number, isNumber);
    valid &= fieldValidation(fields.option, isNotEmty);
    valid &= fieldValidation(fields.message, isNotEmty);   

    return valid;
 }

 class User {
    constructor(yourname, email, number, option, message) {
        this.yourname = yourname;
        this.email = email;
        this.number = number;
        this.option = option;
        this.message = message;
    }
 }

function send() {
    if (isValid()) {
        let usr = new User(yourname.value, email.value, number.value, option.value, message.value)

        alert('${usr.yourname} thanks for submit.')
   
    } else {
        alert("There was an error")
    }
}