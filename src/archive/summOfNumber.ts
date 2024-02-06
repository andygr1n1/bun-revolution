const number = -999

const runner = (number: number): void => {
    const sum = Math.abs(number)
        .toString()
        .split('')
        .reduce((acc, element) => (acc += Number(element)), 0)

    console.log('sum:', sum)
}

runner(number)
