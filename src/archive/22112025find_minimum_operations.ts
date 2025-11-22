function minimumOperations(nums: number[]): number {
    let numberOfOperations = 0

    nums.forEach(n => {
        if (n % 3 !== 0) {
            if ((n + 1) % 3 === 0) {
                numberOfOperations += 1
            } else if ((n - 1) % 3 === 0) {
                numberOfOperations += 1
            }
        }
    })
    console.log('numberOfOperations', { numberOfOperations })
    return numberOfOperations
}

minimumOperations([1, 2, 3, 4, 5])
minimumOperations([3,6,9])

// function minimumOperations(nums: number[]): number {
//    return nums.filter((num)=> num % 3 !== 0).length
// }; 