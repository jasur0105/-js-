let num = +prompt('Введите число');
let num2 = +prompt('Введите число степеней');
/* if (num != 0 && num != isNaN(num)) {
    num2 = !isNaN(num2) && num2 != 0 ? num2 : 2
    var num3 = Math.pow(num, num2)
}
alert(num3); */

if (num != 0 && num != isNaN(num)) {
    num2 = !isNaN(num2) && num2 != 0 ? num2 : 2
    function pow(num, num2) {
    var num3 = num;
    for (let i = 1; i < num2; i++) {
        num3 *= num;
    }
    return num3;
    }
    alert(pow(num, num2))
} else {
    alert('Что-то пошло не так. Обновите страницу и введите числа')
}


console.log('Продолжение кода');
