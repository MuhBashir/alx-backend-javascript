export default function appendToEachArrayValue(array, appendString) {
  let myArray = [];	
  for (const arr of array) {
    myArray.push(appendString + arr)
  }

  return myArray;
}
