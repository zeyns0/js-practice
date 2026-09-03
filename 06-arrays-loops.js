// 1. Deklarasi Array
const fruits = ["Apple", "Banana", "Cherry"]

// 2. Manipulasi Array
fruits.push("Mango"); // menambah di akhir
console.log("Jumlah buah:", fruits.length); // output: 4

// 3. Iterasi menggunakan `for...of` (ringkas & mudah dibaca)
console.log("\n--- Daftar Buah (for...of) ---");
for (const fruit of fruits) {
    console.log(`Buah: ${fruit.toUpperCase()}`);
}

// 4. Iterasi menggunakan `for` loop standar (Dengan akses indeks)
console.log("\n--- Daftar Buah Berdasarkan Indeks ---")
for (let i=0; i < fruits.length; i++) {
    console.log(`Indeks ${fruits[i]}`);
}