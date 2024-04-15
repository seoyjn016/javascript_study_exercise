const numbers = [1, 2, 3, 4, 5];

// map()메서드는 foreach()메서드와

let arr = numbers.map((num) => num * num);
console.log(numbers);
console.log(arr);
document.getElementById("show").innerHTML = arr;
