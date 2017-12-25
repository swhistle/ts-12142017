function summator(...numbers: number[]): string {
    let sum: number = 0;
    for (let i: number = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return `The sum of arguments is ${sum}`;
}

summator(-11, 2);
summator(1, 2, 3, 4, 5);
summator(0, 3);