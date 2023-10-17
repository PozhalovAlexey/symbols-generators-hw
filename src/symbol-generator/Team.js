class Team {
    constructor() {
        this.characters = []
    }

    add(char) {
        this.characters.push(char)
    }

    * [Symbol.iterator]() {
        for (const char of this.characters) {
            yield char
        }
    }

}
function canIterate(obj) {
    return obj !== null && typeof obj[Symbol.iterator] === 'function'
}