interface Person {
  firstName: string;
  lastName:  string;
}
const numbers=[1,2,3,4,5];
function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName + " , " + numbers.reduce((acc,value)=>acc+value,0); //  reduce is similar lambda ...+ , start from 0
}

let user = {
	firstName: "Malcolm",
  lastName:  "Reynolds"
};

document.querySelector("#app").innerHTML = greeter(user);
