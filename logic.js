


var character = {
    "special": ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"],
    "numeric": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    "uppercase": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    "lowercase": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
}


var generatorMixType = [];
var result = '';



function generatePassword() {
    result = '';
    var passwordLength = prompt("Choose the length of your password");
    var passwordLengthInt = parseInt(passwordLength);


    // this if statement checks if the password prompted is between 8 and 128 characters
    if (passwordLengthInt >= 8 && passwordLengthInt <= 128) {


        var characterTypeSpecial = confirm("Press OK if you would like any special characters in your password");
        var characterTypeNumeric = confirm("Press OK if you would like any numbers in your password");
        var characterTypeUppercase = confirm("Press OK if you would like any uppercase characters");
        var characterTypeLowercase = confirm("Press OK if you would like any lowercase characters");


        //generates a new character until the password length has been reached
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

        //after loops runs it returns the password to the result variable
        getPassword(result);
    }


    if (characterTypeSpecial === false && characterTypeNumeric === false && characterTypeUppercase === false && characterTypeLowercase === false) {
        alert("You must choose at least one character type, refresh the page to reset the program");
    }
    if (passwordLengthInt <= 8 || passwordLengthInt >= 128) {
        alert("Password must be between 8 and 128 characters, refresh the page to reset the program")
    }
}


// This replaces the placeholder text and puts the password in the html body
function getPassword(result) {
    document.getElementById("passwordHolder").innerHTML = result;
}

// this uses the window object to get copy the passwordHolder ID to clipboard
function copyPassword(passwordHolder) {
    //Calls the password placeholder ID
    var getPassword = document.getElementById(passwordHolder);

    //Adds a range so that it can select the password placeholder
    var range = document.createRange();

    //Deletes the created range so that there wont be an empty range
    window.getSelection().removeAllRanges();

    //sets the range of the range variable to be the password placeholder
    range.selectNode(getPassword);

    //adds the var range as a range in the window
    window.getSelection().addRange(range);

    //copies the new range
    document.execCommand('copy');

    //alerts the user that the password has been copied
    alert("Your Password has been copied: " + window.getSelection(range));

    //removes the range once its copied to clipboard in order for the cycle to start all over again so the .execCommand wont copy more than one range
    window.getSelection().removeAllRanges();
}
