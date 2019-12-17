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
p4.address = new Address("US");
p4.bithdayYear = 1903;

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

//================= lodash reverse ===============================================
_(persons).reverse().map(
    p => (p !== null && p !== undefined ? p.fullName : "")
);

//================= reduce internal ===============================================
function reduce(arr, fn, accmulator){
    let idx = -1,
        len = arr.length;

    if(!accmulator && len > 0){
        accmulator = arr[++idx];
    }

    while(++idx < len){
        accmulator = fn(accmulator, arr[idx], idx, arr);
    }
    return accmulator;
}

//================= Calculate unmber of people in nation ===============================================
_(persons).reduce( (stat, person) => {
    const country = person.address.country;
    stat[country] = _.isUndefined(stat[country]) ? 1 : stat[country] + 1;
    return stat;
}, {});

//================= map + reduce ===============================================
//_(persons).map(function).reduce(function);

const getCountry = person => person.address.country;

const gatherState = function (stat, criteria){
    stat[criteria] = _.isUndefined(stat[criteria]) ? 1 : stat[criteria];
    return stat;
}

//console.log(_.map(persons, getCountry));

//console.log(_(persons).map(getCountry).reduce(gatherState, {}));

//================= validation function ===============================================
const isNotValid = val => _.isUndefined(val) || _.isNull(val);

const notAllValid = args => _(args).some(isNotValid);

//console.log(notAllValid(["1212", 1, false, null])); --> true
//console.log(notAllValid(["1212", 0, {}]));          --> false

const isValid = val => !_.isUndefined(val) && !_.isNull(val);

const allValid = args => _(args).every(isValid);

//console.log(allValid(["aaa", 1, 2]));             --> true
//console.log(allValid([false, 1, undefined]));     --> false