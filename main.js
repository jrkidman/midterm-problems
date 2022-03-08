function isEvenlyDivisible(num1, num2) {
  if (num1 % num2 === 0) {
    return true;
  }
  else {
    return false;
  }
}



function halfSquare(num) {
  return (num / 2) * num;
}


function isLong(string) {
  if (string.length > 15) {
    return true;
  }
  else if (string.length < 15) {
    return false;
  }
  else if (string.length === 15) {
    return true;
  }
}




function exclaim(str) {
  // if string has NO exclamation point at the end, return the string WITH one added
  // if string has ONE exlamation point at the end, return the string AS IS
  // if string has MULTIPLE exclamation points, return the string with only one at the end
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "!") {
      newStr = newStr + str[i];
    }
  }
  return newStr + "!";
}



function countWords(string) {
  return string.split(" ").length;
}



function containsDigit(str) {
  //if string contains any digits, return true.  otherwise return false.  empty string return false.
  let digits = "0123456789";

  for (i = 0; i < str.length; i++) {
    if (digits.includes(str[i])) {
      return true;
    }
  }
  return false;
}



function containsLowerCase(str) {
  // *** basically if the string contains ANY lowercase leters, return true.  otherwise, return false.
  let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

  for (i = 0; i < str.length; i++) {
    if (lowerCaseLetters.includes(str[i])) {
      return true;
    }
  }
  return false;

}



function containsUpperCase(str) {
  // string with ANY uppercase letters returns TRUE
  // string with NO upperase letters returns FALSE
  // empty string returns false
  let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (i = 0; i < str.length; i++) {
    if (upperCaseLetters.includes(str[i])) {
      return true;
    }
  }
  return false;
}




function containsNonAlphanumeric(str) {
  // string with ONLY non-alpha characters, return TRUE
// string with NO non-alpha characters, return FALSE
// string with only numbers, returns FALSE
// string with ANY non-alpha characters, return TRUE
// empty string returns FALSE

  let nonAlpha = "!@#$%^&*()? ";

  for (let i = 0; i < str.length; i++) {
    if (nonAlpha.includes(str[i])) {
      return true;
    }
  }
  return false;
}





function containsSpace(string) {
  // string contains only spaces, and at least one space, return TRUE ***
  // string contains only letters, no spaces, return FALSE ***
  // string contains only digits, no non-alpha, return FALSE ***
  // string contains some non-spaces and some spaces, return TRUE
  // empty string returns FALSE

  let space = " ";

  for (let i = 0; i < string.length; i++) {
    if (space.includes(string[i])) {
      return true;
    }
  }
  return false;
}




function digits(num) {
  //   ✕ can turn a positive number into an array of its digits (1ms)
  //   ✕ can turn a negative number into an array of its digits, ignoring the negative sign
  //   ✕ can turn a floating point number into an array of its digits, ignoring the decimal point
  // FIRST need to remove any negative sign or decimal points
  // THEN turn the resulting number into an array of it's DIGITS (maybe need to use toNumber?)

  let newNum = "";
  num = num.toString();
  let numArray = [];

  for (let i = 0; i < num.length; i++) {

    if (num[i] !== "-" &&
      num[i] !== ".") {
      newNum = num[i];
      numArray.push(Number(newNum));
    }
  }
  return numArray;
}



function truncate(title) {
  // >= 15 characters, shorten to 8 characters and an ellipsis
  if (title.length >= 15) {
    return title.substr(0, 8) + "...";
  }
  // < 15 characters, return string
  else if (title.length < 15) {
    return title;
  }
}



function isValidPassword(password) {
  // if string has NO uppercase characters, return FALSE
// if string has NO lowercase characters, return FALSE
// if string has NO digits, return FALSE
// if NO non-alpha characters, return FALSE
// if string HAS any spaces, return FALSE
// if string HAS an uppercase, a lowercase a digit, a non-alpha, and no spaces ==> return TRUE

  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let containsUpperCase = false;

  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let containsLowerCase = false;

  let digits = "0123456789";
  let containsDigits = false;

  let nonAlpha = "!@#$%^&*()?";
  let containsNonAlpha = false;

  let space = " ";
  let hasNoSpace = true;

  for (let i = 0; i < password.length; i++) {
    if (upperCase.includes(password[i])) {
      containsUpperCase = true;
    }
    if (lowerCase.includes(password[i])) {
      containsLowerCase = true;
    }
    if (digits.includes(password[i])) {
      containsDigits = true;
    }
    if (nonAlpha.includes(password[i])) {
      containsNonAlpha = true;
    }
    if (space.includes(password[i])) {
      hasNoSpace = false;
    }
  }

  if (containsUpperCase === true &&
    containsLowerCase === true &&
    containsDigits === true &&
    containsNonAlpha === true &&
    hasNoSpace === true) {

    return true;

  }

  else {
    return false;
  }
}





function onlyPunchy(title) {
  // ✕ returns only those titles that are shorter than 15 characters
  // ✕ adds an exclamation point to any titles without exclamation points
  // ✕ removes any excess exclamation points from any titles with multiple exclamation points 
  // ✕ does not factor in excess exclamation points when deciding if title is shorter than 15 characters

// remove all exclamation marks first
// evaluate length, if < 15 then add to new array
// return new array and add an exclamation mark to each item

  let newTitle = [];
  let shortTitle = [];



  for (let item of title) {
    let singleTitle = item.replace(/!/g, "") + "!";
    newTitle.push(singleTitle);
  }

  for (let item of newTitle){
    if (item.length < 16)
      shortTitle.push(item);
    }
    return shortTitle;
  }





module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}