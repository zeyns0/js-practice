// 1. add7: menerima 1 angka dan mengembalikan angka tersebut ditambah 7
function add7(num) {
    return num + 7;
}

// 2. mutiply: menerima 2 angka dan mengembalikan hasil perkalian kedua angka tersebut
function multiply(num1, num2) {
    return num1 * num2;
}

// 3. capitalize: menerima 1 string dan megembalikan string dengan huruf pertama kapital, sisanya huruf kecil
function capitalize(text) {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// 4. LastLetter: menerima 1 string dan mengembalikan karakter paling terakhir
function LastLetter(text) {
    if (!text) return "";
    return text.slice(-1);
}

// Trial output
console.log (add7(5));
console.log (multiply(4, 5));
console.log (capitalize("wENAAKK"));
console.log (LastLetter("KRIUKK"));
