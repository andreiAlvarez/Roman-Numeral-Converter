function convertToRoman(num) {
 let numRom = "";
 var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ];
 
 for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      numRom += romanNumeral[index];
      num -= decimalValue[index];
    }
  }


 return numRom;
}

convertToRoman(1566);
