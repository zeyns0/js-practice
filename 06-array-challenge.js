function processEvenNumbers(numbers) {
    let total = 0;

    for (const num of numbers) {
        // 1. cek apakah 'num' habis dibagi 2 (sisanya 0)
        if (num % 2 === 0) {
            console.log(`Angka genap ditemukan: ${num}`);

            // 2. update variabel 'total' dengan menambahkan 'num'
            total = total + num;
        }
    }

    // cetak total akhir setelah pengulangan selesai
    console.log("-----------------------------");
    console.log(`Total jumlah angka genap: ${total}`);
}

const sampleData = [12, 5, 8, 21, 14, 7, 30];
processEvenNumbers(sampleData);