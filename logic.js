


var passwordLength = prompt("Choose the length of your password");
var passwordLengthInt = parseInt(passwordLength);
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


function generatePassword() {

    //this holds the result generated
    var result = '';

    for (var i = 0; i < passwordLengthInt; i++) {

        var generatorSpecial = Math.floor(Math.random() * 28);
        var generatorNumeric = Math.floor(Math.random() * 9);
        var generatorUppercase = Math.floor(Math.random() * 25);
        var generatorLowercase = Math.floor(Math.random() * 25);


        var generatorMixType = [1, 2, 3, 4];

        generatorMixType[1] = character.special[generatorSpecial];
        generatorMixType[2] = character.numeric[generatorNumeric];
        generatorMixType[3] = character.uppercase[generatorUppercase];
        generatorMixType[4] = character.lowercase[generatorLowercase];
    
        
        var generatorMixRandom = generatorMixType[Math.floor(Math.random() * generatorMixType.length)];


        console.log(generatorMixRandom.length);




        result += generatorMixRandom;
    }
    return result;
}


// This replaces the placeholder text and puts the password in the html body
function getPassword() {
    document.getElementById("passwordHolder").innerHTML = generatePassword();
}












        // if(characterTypeSpecial === true) {
        // generatorMixType[1] = character.special[generatorSpecial];
        // }
        // else {
        //     generatorMixType[1] = 0;
        // }

        // if(characterTypeNumeric === true) {
        // generatorMixType[2] = character.numeric[generatorNumeric];
        // }
        // else {
        //     generatorMixType[2] = 0;
        // }

        // if(characterTypeUppercase === true) {
        // generatorMixType[3] = character.uppercase[generatorUppercase];
        // }
        // else{
        //     generatorMixType[3] = 0;
        // }

        // if(characterTypeLowercase === true) {
        // generatorMixType[4] = character.lowercase[generatorLowercase];
        // }
        // else {
        //     generatorMixType[4] = 0;
        // }






        // generatorMixType[1] = character.special[generatorSpecial];
        // generatorMixType[2] = character.numeric[generatorNumeric];
        // generatorMixType[3] = character.uppercase[generatorUppercase];
        // generatorMixType[4] = character.lowercase[generatorLowercase];