function countAndSumOdds(numbers) {
    let count = 0;
    let total = 0;

    for (const num of numbers) {
        if (num % 2 !== 0) {
            count++;
            total += num;
        }
    }

    console.log(`Banyak angka ganjil: ${count}`);
    console.log(`Total jumlah angka ganjil: ${total}`);
}

const data = [3, 10, 7, 12, 15, 22];
countAndSumOdds(data);