class Team {
    constructor() {
        this.characters = [];
    }

    [Symbol.iterator]() {
        let index = 0;
        const characters = this.characters;

        return {
            next() {
                if (index < characters.length) {
                    return {
                        done: false,
                        value: characters[index++]
                    };
                } else {
                    return {
                        done: true
                    };
                }
            }
        };
    }

    add(character) {
        this.characters.push(character);
    }
}

const team = new Team();
team.add({name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10});
team.add({name: 'Маг', type: 'Wizard', health: 40, level: 2, attack: 60, defence: 20});

for (const character of team) {
    console.log(character);
}