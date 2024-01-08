
/*
* Calculates the average of a series of numbers
*
* @param{number[]} data An array of numbers
* @return{number} The average numbers in the arary
*/
export default function average(numbers) {
    if (!Array.isArray(numbers) || !numbers.every(Number.isFinite)) {
      return NaN;
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }