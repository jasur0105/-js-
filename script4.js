var quantity = +prompt('Введите количество решаемых примеров');
var max = 10;
function rand(max) {
    return Math.floor(Math.random() * max + 1);
}

for (i = 0; i < quantity; i++) {
    var num1 = rand(max);
    var num2 = rand(max);
    var sign = Math.floor(Math.random() * 4 + 1)

    if (sign == 1) {
        var sum = num1 + num2;
        var answer = prompt("Решите пример:" + num1 + "+" + num2 + "=");
    } else if (sign == 2) {
        var sum = num1 - num2;
        var answer = prompt("Решите пример:" + num1 + "-" + num2 + "=");
    } else if (sign == 3) {
        var sum = num1 * num2;
        var answer = prompt("Решите пример:" + num1 + "*" + num2 + "=");
    } else if (sign == 4) {
        var sum = num1 / num2;
        var answer = prompt("Решите пример:" + num1 + "/" + num2 + "=");
    }

    if (sum == answer) {
        console.log(`Ваш ответ верный - ${sum}`);
    } else {
        console.log(`Ваш ответ не верный - ${answer}! Правильный ответ - ${sum}!`);
    }
}


