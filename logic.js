var passwordLength = prompt("Choose the length of your password");
var passwordLengthInt = parseInt(passwordLength);


// this if statement checks if the password prompted is between 8 and 128 characters
if (passwordLengthInt >= 8 && passwordLengthInt <= 128) {


    var characterTypeSpecial = confirm("Press OK if you would like any special characters in your password");
    var characterTypeNumeric = confirm("Press OK if you would like any numbers in your password");
    var characterTypeUppercase = confirm("Press OK if you would like any uppercase characters");
    var characterTypeLowercase = confirm("Press OK if you would like any lowercase characters");


    if (characterTypeSpecial === false && characterTypeNumeric === false && characterTypeUppercase === false && characterTypeLowercase === false) {
        alert("You must choose at least one character type, refresh the page to reset the program");
    }


    var character = {
        "special": ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"],
        "numeric": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        "uppercase": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        "lowercase": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    }


    var generatorMixType = [];
    var result = '';



    function generatePassword() {

        for (var i = 0; i < passwordLengthInt; i++) {
            var generatorSpecial = Math.floor(Math.random() * character.special.length);
            var generatorNumeric = Math.floor(Math.random() * character.numeric.length);
            var generatorUppercase = Math.floor(Math.random() * character.uppercase.length);
            var generatorLowercase = Math.floor(Math.random() * character.lowercase.length);

            var arraySpecial = character.special[generatorSpecial];
            var arrayNumeric = character.numeric[generatorNumeric];
            var arrayUppercase = character.uppercase[generatorUppercase];
            var arrayLowercase = character.lowercase[generatorLowercase];


            if (characterTypeSpecial) {
                generatorMixType.push(arraySpecial);
            }
            if (characterTypeNumeric) {
                generatorMixType.push(arrayNumeric);
            }
            if (characterTypeUppercase) {
                generatorMixType.push(arrayUppercase);
            }
            if (characterTypeLowercase) {
                generatorMixType.push(arrayLowercase);
            }

            var mixArrayType = generatorMixType[Math.floor(Math.random() * generatorMixType.length)];
            var mixArrayTypeString = mixArrayType + '';

            result += mixArrayTypeString;
        }

        return result;
    }



    // This replaces the placeholder text and puts the password in the html body
    function getPassword() {
        document.getElementById("passwordHolder").innerHTML = generatePassword();
        result = '';
    }


}
else {
    alert("Password must be between 8 and 128 characters, refresh the page to reset the program")
}


// this uses the window object to get copy the passwordHolder ID to clipboard
function copyPassword(passwordHolder) {
    var getPassword = document.getElementById(passwordHolder);
    var range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(getPassword);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert("Your Password has been copied");
}
