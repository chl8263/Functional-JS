//================= data ===============================================
const p1 = new Person("Haskell", "curry", "111-11-1111");
p1.address = new Address("US");
p1.bithdayYear = 1900;

const p2 = new Person("Barkley", "Rosser", "222-22-2222");
p2.address = new Address("Greece");
p2.bithdayYear = 1907;

const p3 = new Person("John", "von Neumann", "333-33-3333");
p3.address = new Address("Hungary");
p3.bithdayYear = 1903;

const p4 = new Person("Alonzo", "Church", "444-44-4444");
p2.address = new Address("US");
p2.bithdayYear = 1903;

//================= Lambda ===============================================
const name = p => p.fullName;

console.log(name(p1));

//================= map ===============================================
// Imperative programming -->
var result = [];
var person = [p1,p2,p3,p4];

for(let i = 0; i< person.length; i++){
    var p = person[i];
    if(p !== null && p != undefined){
        result.push(p);
    }
}