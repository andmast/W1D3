function countLetters (str) {
  var result = {};
  var noSpaces = str.split(" ").join("");
  for (var i = 0; i < noSpaces.length; i++) {
    if (result[noSpaces[i]] === undefined){
      result[noSpaces[i]] = 1;
    } else {
      result[noSpaces[i]] ++;
    }
  }

  return result;
}

console.log(countLetters("lighthous in the house"));