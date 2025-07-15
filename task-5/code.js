function pigIt(str) {
    return str
        .trim()
        .split(' ')
        .map(word => {
            return /^[a-zA-Z]+$/.test(word)
                ? word.slice(1) + word[0] + 'ay'
                : word;
        })
        .join(' ');
}