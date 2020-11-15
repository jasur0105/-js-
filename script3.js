var name = prompt('Введите ваше имя');
var birth = +prompt('Введите ваш год рождения');
var year = +prompt('Введите текущий год');

function age(birth, year) {
    var age = year - birth;
    return age;
}
console.log('Имя '+ name +', ' + 'год рождения ' + birth + ', ' + 'текущий год ' + year);
console.log(name + ', Ваш возраст ' + age(birth, year));