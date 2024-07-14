const passwordBox = document.getElementById("password");
const length = 12;

const uperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuwxyz"
const number = "0123456789";
const symble = ",./<>?;'\|:-=_+/*!@#~$%^&*()";

const allChars = uperCase + lowerCase + number + symble;

function createPassword(){
let password = "";
password += uperCase[Math.floor(Math.random() *uperCase.length)];
password += lowerCase[Math.floor(Math.random() *lowerCase.length)];
password += number[Math.floor(Math.random() *number.length)];
password += symble[Math.floor(Math.random() *symble.length)];

while(length > password.length){
    password += allChars[Math.floor(Math.random() *allChars.length)];
}
passwordBox.value = password;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}