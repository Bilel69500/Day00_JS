function firstNonRepeatingCharacter(string) {
    for (var i = 0; i < string.length; i++) {
        var c = string.charAt(i);
        if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
            return c;
        }
    }
    return null;
}

const mot = 'abcdcaf';
console.log(firstNonRepeatingCharacter(mot));


    exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;  