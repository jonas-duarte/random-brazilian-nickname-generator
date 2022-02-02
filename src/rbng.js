const dictionary = require("./dictionary.json")


function getWordFromDictionary(seed) {
    return dictionary[seed % dictionary.length]
}



class RandomBrazilianNicknameGenerator {
    static getRandomInteger() {
        return parseInt(Math.random() * 9999999)
    }

    constructor(seed = RandomBrazilianNicknameGenerator.getRandomInteger()) {
        this.word = getWordFromDictionary(seed)
    }

    mapToRandomUpperCase(seed = RandomBrazilianNicknameGenerator.getRandomInteger()) {
        const binary = seed.toString(2).split("").reverse().map(b => parseInt(b))
        this.word = this.word
            .split("")
            .map((c, i) => binary[i % binary.length] ? c.toUpperCase() : c)
            .join("")
        return this
    }

    mapToRandomNumberSubstitution(seed = RandomBrazilianNicknameGenerator.getRandomInteger()) {
        const numberMapping = { a: 4, e: 3, i: 1, o: 0, z: 2, s: 5, g: 6, t: 7 }
        const binary = seed.toString(2).split("").reverse().map(b => parseInt(b))
        let index = 0

        this.word = this.word
            .split("")
            .map((c, i) => numberMapping[c] && binary[index++ % binary.length] ? numberMapping[c] : c)
            .join("")
        return this
    }

    mapToRandomNumberAtEnding(seed = RandomBrazilianNicknameGenerator.getRandomInteger()) {
        let _seed = seed
        const hasRandomNumber = _seed % 2 === 1
        if (!hasRandomNumber) return this
        _seed = parseInt(_seed / 2)
        const hasSpace = _seed % 2 === 1
        _seed = parseInt(_seed / 2)
        this.word = this.word + (hasSpace ? " " : "") + _seed % 1000
        return this
    }
}

module.exports = RandomBrazilianNicknameGenerator