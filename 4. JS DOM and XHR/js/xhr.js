class Person{
    #firstName;
    #lastName;
    #phone;
    constructor(firstName, lastName, phone){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#phone = phone
    }
    get firstName(){
        return this.#firstName;
    }
    get lastName(){
        return this.#lastName;
    }
    get phone(){
        return this.#phone;
    }
}

const addPerson = (person, parent) => {
    const row = document.createElement("td");
    const firstName = document.createElement("td");
    const lastName = document.createElement("td");
    const phone = document.createElement("td");
    row.appendChild(firstName);
    row.appendChild(lastName);
    row.appendChild(phone);
    parent.appendChild(row);
    firstName.textContent = person.firstName;
    lastName.textContent = person.lastName;
    phone.textContent = person.phone;
}
const tBody = document.getElementById('contact-list-table');

const fetchPersons = () => {
    const personsURI = '/data/person.json';
    const xhr =  new XMLHttpRequest();
    xhr.open('GET', personsURI);
    xhr.addEventListener('load', function () {
        const x = this;
        if(this.status === 200){
            const responseText = this.responseText;
            const personList = JSON.parse(responseText);
            personList.forEach((item) => {               
                console.log(item)
                const person = new Person(item.firstName, item.lastName, item.phone);
                addPerson(person, tBody);
            });
        }
    });
    xhr.send();
}
fetchPersons();