function fizzbuzz(answer) {
    for (let i = 1; 1 <= answer; i++) {
        // cek kelipatan 3 dan 5 terlebih dahulu
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// uji coba fungsi hingga angka 15
fizzbuzz(15);