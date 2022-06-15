var clone1 = Object.assign({}, person);
var clone2 = Object.assign({}, person);
var samePerson = person;

person.age = person.age + 1;
person.country = "FR";
