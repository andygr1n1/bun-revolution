const data = 'abcd'

// const runner = (data: string): void => {
//     // const res = data
//     //     .split('')
//     //     .map((letter, i) => letter.toUpperCase() + Array(i + 1).join(letter.toLocaleLowerCase()))
//     //     .join('-')
//     const res = data
//         .split('')
//         .map((letter, i) => letter.toUpperCase() + letter.repeat(i).toLocaleLowerCase())
//         .join('-')

//     console.log('minMax:', res)
// }

// runner(data)

function isOneBitCharacter(bits: number[]): boolean {
    const bitsBuff: (number | null)[] = bits

    for (let i = 0; i < bitsBuff.length; i++) {
        if (bitsBuff[i] === null) continue
        const stringCode = String(bitsBuff[i] + String(bitsBuff[i + 1]))
        if (+stringCode >= 10) {
            bitsBuff[i] = null
            bitsBuff[i + 1] = null
        }
    }

    console.log('bitsBuff:', bitsBuff)

    return true
}

isOneBitCharacter([0, 1, 0])
