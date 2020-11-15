while (true) {
    var num = prompt('Введите число');
    if (!isNaN(num) && num != 0) {
        break;
    }
}
while (true) {
    var sym = prompt('Введите символ отступов');
    if (isNaN(sym)) {
        break;
    }
}
while (true) {
    var endsym = prompt('Введите конечный символ');
    if (isNaN(endsym)) {
        break;
    }
}
var text = ''
for (let i = 0; i < num; i++) {
    text = sym.repeat(i) + endsym;
    console.log(text);
}