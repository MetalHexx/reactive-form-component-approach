/**
 *
 * @param array get the first item from this array
 * @param expression the expression to use for filtering
 * @param fallback if array was falsy, empty, or the item was not found, the fallback is returned.
 * @returns if item is found, its returns.  If array was empty, falsy, or item was not found in array, returns fall back if provided.  If not provided, throws an error.
 */
export function first<T>(array: ReadonlyArray<T>, expression?: Function, fallback?: T): T {

  if(!array && fallback === void 0) throw new Error("Array was falsy and no fallback was supplied");

  if(!array && fallback !== void 0) return fallback;

  let filteredItems = array;

  if(expression){
    filteredItems = array.filter(item => expression(item) as T);
  }

  if (filteredItems.length >= 1) return array[0];

  if (filteredItems.length === 0 && fallback !== void 0) return fallback;

  throw new Error("No items were found and no fallback was defined");

}
