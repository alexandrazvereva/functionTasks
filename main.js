//1 Дополните функцию так, чтобы она выводила в консоль
// длину каждого слова в массиве

function showWordsLength(array) {
    //ваш код
}

showWordsLength(["one", "two", "three", "ten", "thirteen"]) // [3, 3, 5, 3, 8]
showWordsLength["Anna","Elizabeth", "William", "Yo"] // [4,8, 6, 2]

//2 Дополните функцию так, чтобы она возвращала (return) среднее арифметическое 
//всех чисел из принимаемого массива

function showAverage(array) {
    //ваш код 
    let sum = 0;
    console.log("array")
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(Math.round(sum / array.length))
    return sum / array.length;
}

showAverage([1, 5, 10]); 
console.log(showAverage[1, 5, 10]) // 5
console.log(showAverage[6, 32, 100]) // 46
console.log(showAverage[400, 7, 182]) // 745

//3. Напишите функцию, которая принимает 2 параметра - 2 массива. 
//Функция должна склеивать их в один массив и выводить в консоль.
//продумайте ее название, напишите пару вызовов функции с параметрами,
//чтобы проверить ее работу

