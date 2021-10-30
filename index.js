function sumItems(array) {
  if (array.length === 0) {
    return null;
  }
  let out = [];
  console.log(array)
  
  function helper (array) {
    for (let i = 0; i < array.length; i++) {
      let element = array[i]

      if (Array.isArray(element)) {
        helper(element);
      } else {
        out.push(element)
        helper(element)
      }

    }
    
     
  }
  helper(array);
  console.log(out)
  return out.reduce((a,b) => a + b)
  }


  // if (array.length > 0) {
  //   console.log(array);
  //   return (array[(array.length)-1] + sumItems(array.pop()));
  // }
  
  // array.forEach(item => {
  //   if (Array.isArray(item)) {
  //     // Print out all it's items individually
  //     sumItems(item);
  //   } else {
  //     return (item + sumItems(array + 1));
  //   }
  
  // })




// sumItems([1, 2, 3, 4, 5], )

module.exports = sumItems;