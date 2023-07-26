/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue (array, appendString) {
  const myArray = [];
  for (const arr of array) {
    myArray.push(appendString + arr);
  }

  return myArray;
}
