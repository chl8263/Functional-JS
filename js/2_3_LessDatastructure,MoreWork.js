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

//================= lodash map ===============================================
// Imperative programming -->
var result = [];
var persons = [p1,p2,p3,p4];

for(let i = 0; i< persons.length; i++){
    var p = persons[i];
    if(p !== null && p != undefined){
        result.push(p);
    }
}

// functional programming -->
_.map(persons,
    s => (s !== null && s !== undefined) ? s.fullName : ''
);

//================= map internal ===============================================
function map(arr, fn){
    const len = arr.length,
        result = new Array(len);
    for(let idx = 0; i < len; i++){
        result[idx] = fn(arr[idx], idx, arr);
    }
    return result;
}

//================= lodash recerse ===============================================
_(persons).reverse().map(
    p => (p !== null && p !== undefined ? p.fullName : "")
);