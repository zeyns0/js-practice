// 1. Memicu ReferenceError (Variabel belum ada)
function sayHello() {
    let message = "Halo rek!";
}
sayHello();
console.log(message); // variabel dipanggil di luar scope

// 2. Memicu TypeError (Method tidak cocok dengan tipe data)
let str = "Halo rek";
str.push(!); // push() hanya untuk Array, bukan string

// 3. Memicu SyntaxError 
function checkNumber(num) {
    if (num > 10 { // Lupa tutup kurung di kondisi if
        console.log("Angka besar");
    })
}