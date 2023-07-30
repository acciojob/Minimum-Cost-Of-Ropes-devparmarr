function calculateMinCost() {
  let string = document.getElementById("rope-lengths").value;

  // Validate input and filter out non-numeric and negative values
  let arr = string.split(",").map(num => parseInt(num)).filter(num => !isNaN(num) && num >= 0);

  let finalValue = 0;

  while (arr.length > 1) {
    arr.sort((a, b) => a - b);
    let value = arr.shift();
    let value1 = arr.shift();
    let mainValue = value + value1;
    finalValue = finalValue + mainValue;
    arr.push(mainValue);
  }

  let result = document.getElementById("result");
  result.innerText = finalValue;
  return finalValue;
}
