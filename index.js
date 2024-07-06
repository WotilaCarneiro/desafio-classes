class TheHero {
    constructor(name, age, typeOfHero) {
        this.name = name;
        this.age = age;
        this.typeOfHero = typeOfHero;
        
    }
    atacar() {
        let attack;
        if (this.typeOfHero === 'Mage') {
            attack = 'Magic';
        } else if (this.typeOfHero === 'Warrior') {
            attack = 'Sword';
        } else if (this.typeOfHero === 'Monk') {
            attack = 'Martial Arts'
        } else if (this.typeOfHero === 'Ninja') {
            attack = 'Shuriken';
        }
        console.log(`O tipo ${this.typeOfHero} atacou usando ${attack}`);
    }    
}

let newHero = new TheHero('Wótila', 42, 'Ninja');
newHero.atacar();