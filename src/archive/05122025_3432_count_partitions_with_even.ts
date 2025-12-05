const countPartitionsWithEven = (nums: number[]): number => {
    const totalSum = nums.reduce((x, y) => x + y, 0)

    return totalSum % 2 === 0 ? nums.length - 1 : 0
}

console.log(countPartitionsWithEven([10, 10, 3, 7, 6]))
