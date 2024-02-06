const numbers = [0]

const runner = (numbers: number[]): void => {
    const res = numbers.sort((a, b) => a - b)

    console.log('minMax:', [res[0], res[numbers.length - 1]])
}

runner(numbers)
