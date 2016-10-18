import { Person } from './examples/person';

class Developer<Person> {
    fullname: string;
    constructor(public firstname: string, public lastname: string) {
        this.fullname = firstname+" "+lastname;
    }
}

function hello(person: Person) {
    return "Hola soy: "+ person.firstname+" "+person.lastname;
}

var stud = new Developer("Carlos", "Meneses");

// Write DOM
document.body.innerHTML = '<h2>'+hello(stud)+'</h1>';