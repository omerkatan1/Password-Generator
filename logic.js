


var passwordLength = prompt("Choose the length of your password");
var passwordLengthInt = parseInt(passwordLength);
// var characterTypeSpecial = confirm("Press OK if you would like any special characters in your password");
// var characterTypeNumeric = confirm("Press OK if you would like any numbers in your password");
// var characterTypeUppercase = confirm("Press OK if you would like any uppercase characters");
// var characterTypeLowercase = confirm("Press OK if you would like any lowercase characters");



if (passwordLengthInt > 8 && passwordLengthInt < 128) {



var characterTypeSpecial = confirm("Press OK if you would like any special characters in your password");
var characterTypeNumeric = confirm("Press OK if you would like any numbers in your password");
var characterTypeUppercase = confirm("Press OK if you would like any uppercase characters");
var characterTypeLowercase = confirm("Press OK if you would like any lowercase characters");



var character = {
    "special": ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"],
    "numeric": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    "uppercase": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    "lowercase": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
}

var generatorMixType = [];
function setTypes() {

    var generatorSpecial = Math.floor(Math.random() * character.special.length);
    var generatorNumeric = Math.floor(Math.random() * character.numeric.length);
    var generatorUppercase = Math.floor(Math.random() * character.uppercase.length);
    var generatorLowercase = Math.floor(Math.random() * character.lowercase.length);

    var s = character.special[generatorSpecial];
    var n = character.numeric[generatorNumeric];
    var u = character.uppercase[generatorUppercase];
    var l = character.lowercase[generatorLowercase];


    if (characterTypeSpecial) {
        generatorMixType.push(s);
    }
    if (characterTypeNumeric) {
        generatorMixType.push(n);
    }
    if (characterTypeUppercase) {
        generatorMixType.push(u);
    }
    if (characterTypeLowercase) {
        generatorMixType.push(l);
    }
    return generatorMixType;
}




function generatePassword(generatorMixType) {
    var result = '';



    for (var i = 0; i < passwordLengthInt; i++) {



        var generatorMixRandom = generatorMixType[Math.floor(Math.random() * generatorMixType.length)];
        console.log(generatorMixRandom);



        result += generatorMixRandom;
    }
    return result;
}


// This replaces the placeholder text and puts the password in the html body
function getPassword() {
    document.getElementById("passwordHolder").innerHTML = generatePassword(setTypes());
}

}
else {
    alert("Password must be between 8 and 128 characters, refresh the page to reset the program")
}