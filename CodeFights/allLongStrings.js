function allLongestStrings(inputArray) {
    let maxLength = inputArray.reduce((prev, cur) =>{ 
        return prev >= cur.length ? prev : cur.length }, 0);
    console.log(maxLength);
    return inputArray.filter(v => v.length === maxLength);
  }
  

console.log(allLongestStrings(["abc", "eeee", "abcd", "dcd"]));