class Person {
    constructor(name) {
        this.name = name
    }
    eat(food){
        console.log(`${this.name}이 먹는다`)
    }
}

export default Person;