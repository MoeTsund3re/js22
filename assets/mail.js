//1 задача

function printab() {
    let a = parseInt(prompt("Введите значение a:"));
    let b = parseInt(prompt("Введите значение b:"));

    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

printab();


//2 задача

function min(c, d) {
    if (c < d) {
        return c;
    } else {
        return d;
    }
}

let result = min(10, 5);
console.log(result); // Вывод: 5


//3 задача

let styles = ["Джаз", "Блюз"];
console.log(styles); 

styles.push("Рок-н-ролл");
console.log(styles); 

let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Классика";
console.log(styles); 

let firstElement = styles.shift();
console.log(firstElement); 
console.log(styles); 

styles.unshift("Рэп", "Регги");
console.log(styles); 




