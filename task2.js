class Person {

    constructor({name, surname, personalId}){
        this.name = name;
        this.surname = surname;
        this.personalId = personalId;
    }

    hello(){
        return `Hello I am: "${this.name} ${this.surname}"`;
    }
}


class Employee extends Person {
    
    constructor({name, surname, personalId, salary}){
        super({name, surname, personalId});
        this.salary = salary;
    }

    hello(){
        return super.hello() + `. My salary is ${this.salary}`;
    }
}


/******************************  Driver Code ***************************************/
let p = new Person({
    name: 'roma',
    surname: 'chikhladze',
    personalId: '1232351345'
})

console.log(p.hello())

let e = new Employee({
    name: 'roma',
    surname: 'chikhladze',
    personalId: '1232351345',
    salary: 3000
})

console.log(e.hello())
