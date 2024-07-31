function order(words){

   let array = words.split(' ');
  let organisedArray = [];
  //Iterate through the provided string
  for(i = 0; i <= array.length; i++){
//     Iterate through individual words from the string
    for(j = 0; j < array.length; j++){
//       Checks if the positionn of the word in the string aligns with the value in the word
      if(array[j].indexOf(i) >= 0){values
//         Push the words in the empty array in the order of their values
        organisedArray.push(array[j]);
      }
    }
  }
  // Joins together the words to come up with the final arranged string
  return organisedArray.join(' ');
}
