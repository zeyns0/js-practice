// 1. Memicu ReferenceError (Variabel belum ada)
function sayHello() {
    let message = "Halo rek!";
    return message;
}
let hallocak = sayHello();
console.log(hallocak); // variabel dipanggil di luar scope (perbaikan)

// 2. Memicu TypeError (Method tidak cocok dengan tipe data)
let str = "Halo rek krrriiukkk";
str = str + "!";
console.log(str);  // push() hanya untuk Array, bukan string (perbaikan)

// 3. Memicu SyntaxError 
function checkNumber(num) {
    if (num > 10) { // Lupa tutup kurung di kondisi if (perbaikan)
        console.log("Angka besar");
    }
}

checkNumber(15);