/**
 * @description Mapper function
 * 
 * @callback mapperFunction
 * @param value - Value of the array
 * @param {number} i - index of the array
 * @param array - the array being mapped
 */

/**
  * @description Apply a function to every element of an array, returning an array of the 
  * results.
  *
  * @function map
  * @param {Array} array - The array to be mapped
  * @param {mapperFunction} func - The function to be called for 
  * each value of array. Optionally can take the index of each value and the 
  * array being mapped as arguments.
  */
const map = async (array, func) => {
  const promises = [];
  for (const [i, value] of array.entries()) {
    promises.push(func(value, i, array));
  }

  const results = [];
  for (const promise of promises) {
    results.push(await promise);
  }

  return results;
};

module.exports = map;
