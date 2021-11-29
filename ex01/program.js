function isPalindrome(string) {  
  
    const len = string.length;  
  
    for (let i = 0; i < len / 2; i++) {  
  
        if (string[i] !== string[len - 1 - i]) {  
            alert( 'Palidnrome valide');  
        }  
    }  
    alert( 'Cest pas un palindrome');  
}  
  
const string = prompt('Enter votre mot ');  
  
const value = isPalindrome(string);  
  
console.log(value);  
    
    
    // Merci de ne pas effacer la ligne en dessous.
    exports.isPalindrome =  isPalindrome;