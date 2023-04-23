//1 Дополните функцию так, чтобы она выводила в консоль
// длину каждого слова в массиве

function showWordsLength(array) {
    let newArray = array.map(element => element.length);
    console.log(newArray);
}

showWordsLength(["one", "two", "three", "ten", "thirteen"]) // [3, 3, 5, 3, 8]
showWordsLength(["Anna", "Elizabeth", "William", "Yo"]) // [4,9, 7, 2]

//2 Дополните функцию так, чтобы она возвращала (return) среднее арифметическое 
//всех чисел из принимаемого массива

function showAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return Math.round(sum / arr.length);
}


console.log(showAverage([1, 5, 10])) // 5
console.log(showAverage([6, 32, 100])) // 46
console.log(showAverage([400, 7, 1829])) // 745

//3. Напишите функцию, которая принимает 2 параметра - 2 массива.
//Функция должна склеивать их в один массив и выводить в консоль.
//продумайте ее название, напишите пару вызовов функции с параметрами,
//чтобы проверить ее работу


function showArrays(arrayA, arrayB) {
    console.log(arrayA.concat(arrayB));
    //console.log( arrayA + arrayB);
    //console.log(a.push(b))
}

showArrays([1, 2, 3, 4, 5, 10], [6, 7, 8, 9, 943, 1]);
showArrays(["apple", "banana", "pineapple"], ["cucumber", "tomato", "potato"]);
showArrays([1, 2, 3, 4, 5, 10], ["apple", "banana", "pineapple"]);
