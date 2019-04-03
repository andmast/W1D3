function postionOfLetters (str) {
  var result = {};
  var index = str;
  for (var i = 0; i < index.length; i++) {
    if (result[index[i]] === undefined){
      result[index[i]] = [i];
    } else {
      result[index[i]].push(i);
    }
  }

  return result;
}

console.log(postionOfLetters("lighthouse in the house"));