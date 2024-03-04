// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function squareP(squareArea) {
    let res = squareArea * squareArea;
    return res;
}

let x = squareP(12);
console.log(x);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaRadius(radius) {
    let res = radius * radius * Math.PI;
    return res;
};

let result = areaRadius(6);
console.log(result);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function calculateCylinderArea(radius, height) {
    let area = 2 * Math.PI * radius * (radius + height);
    return area;
}

let radius = 17;
let height = 20;

let cylinderArea = calculateCylinderArea(radius, height);
console.log(cylinderArea);

// - створити функцію яка приймає масив та виводить кожен його елемент

function ArrayFunction(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
let arr = [1, false, "hello", true, "greatJob"];

ArrayFunction(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph() {
    console.log(arguments);
}

paragraph('<p>lorem ipsum</p>')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function elements(text) {
    document.write('<ul>');
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write('</ul>');
}
elements("good job")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function FunctionWithCycle(text, value) {
    document.write('<ul>');
    for (let i = 0; i < value; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

FunctionWithCycle("easy or hard", 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createListForDates(array) {
    document.write(`<ul>`)
    for (const data of array) {
        document.write(`<li>${data}</li>`);
    }
    document.write(`</ul>`);
};

createListForDates([1, false, "hello", true, "greatJob"]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function createDataForUsers() {
    for (const user of users) {
        document.write(`
        <div>
            <p>id: ${user.id}</p>
            <p>name: ${user.name}</p>
            <p>age: ${user.age}</p>
        </div>`)
    }
};
let users = [
    { name: "Artem", age: 17, id: true }
]
createDataForUsers(users);

// - створити функцію яка повертає найменьше число з масиву

function numberToArray(arrayOfNumbers) {
    let minNumber = Math.min(...arrayOfNumbers);
    return minNumber;
}

let arrayOfNumbers = [1, 5, 90, 140, 6, 3];

let minNumber = numberToArray(arrayOfNumbers);
console.log("Найменше число з масиву:", minNumber);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let sumForNumbers = 0;

    for (let i = 0; i < arr.length; i++) {
        sumForNumbers += arr[i];
    }
    return sumForNumbers;
}
const resultForNumbers = sum([2, 5, 10]); //17
console.log(resultForNumbers);



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {

    if (index1 >= 0, index1 < arr.length || index2 >= 0, index2 < arr.length) {
        let variable = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = variable;
    } else {
        console.log("Не дійсні індекси!")
    }
}

let arrayForIndex = [11, 22, 33, 44];
swap(arrayForIndex, 0, 1);
console.log(arrayForIndex);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    if (currencyValues.hasOwnProperty(exchangeCurrency)) {
        return sumUAH / currencyValues[exchangeCurrency];
    } else {
        console.error("Непідтримувана валюта");
        return null;
    }
}

let uahToUsdRate = 0.036;
let uahToEurRate = 0.03;

let currencyValues = {
    "USD": uahToUsdRate,
    "EUR": uahToEurRate
};

let sumUAH = 10;
let exchangeCurrency = "USD";

let resultForExchange = exchange(sumUAH, currencyValues, exchangeCurrency);
console.log(resultForExchange);