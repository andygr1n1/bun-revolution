const name = 'Andrew Grini'

const runner = (name: string): void => {
    const initials = name
        .split(' ')
        .map(nameChunk => nameChunk.split('')[0].toUpperCase())
        .join('.')
    console.log('initials:', initials)
}

runner(name)
