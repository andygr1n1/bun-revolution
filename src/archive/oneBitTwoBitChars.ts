function isOneBitCharacter(bits: number[]): boolean {
    if (!bits.length) return true
    const bitsBuff: (number | null)[] = bits

    for (let i = 0; i < bitsBuff.length; i++) {
        if (bitsBuff[i] === null) continue
        const stringCode = String(bitsBuff[i] + String(bitsBuff[i + 1]))
        if (+stringCode >= 10) {
            bitsBuff[i] = null
            bitsBuff[i + 1] = null
        }
    }

    const lastBit = bitsBuff[bitsBuff.length - 1]

    return lastBit === 0
}

isOneBitCharacter([0, 1, 0])
