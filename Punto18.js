function convertToBaseK(x, k) {
  let result = "";
  while (x > 0) {
    let operation = x % k;
    result = operation + result;
    x = Math.floor(x / k);
  }
  return result;
}

let x = 287;
let k = 4;
let result = convertToBaseK(x, k);
console.log(result);
