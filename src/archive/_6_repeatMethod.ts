const data = 'abcd'

const runner = (data: string): void => {
    // const res = data
    //     .split('')
    //     .map((letter, i) => letter.toUpperCase() + Array(i + 1).join(letter.toLocaleLowerCase()))
    //     .join('-')
    const res = data
        .split('')
        .map((letter, i) => letter.toUpperCase() + letter.repeat(i).toLocaleLowerCase())
        .join('-')

    console.log('minMax:', res)
}

runner(data)

