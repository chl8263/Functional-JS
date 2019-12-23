var names = ['alonzo church', 'Haskell curry', 'stephen',
 'stephen_kleene', 'John Von Neumann', 'stephen_kleene'];

//=================== Imperative programming ======================
var result = [];
for(let i = 0; i < names.length; i ++){
    var n = names[i];
    if(n !== undefined && n !== null){
        var ns = n.replace(/_/, '').split(' ');
        for(let j = 0; j < ns.length; j++){
            var p = ns[j];
            p = p.charAt(0).toUpperCase() + p.slice(1);
            ns[j] = p;
        }
        if(result.indexOf(ns.join(' ')) < 0){
            result.push(ns.join(' '));
        }
    }
}
result.sort();

//console.log(result);

//=================== Functional chaining programming ======================
_.chain(names)
    .filter(isValid)
    .map(s => s.replace(/_/, ' '))
    .uniq() // --> exclude duplicate
    .map(_.startCase)
    .sort()
    .value();

//console.log(names);

//=================== Recursion - Imperative ======================
var nums = [1,2,3,4,5,5];
var acc = 0;
for(let i = 0; i < nums.length; i++){
    acc += nums[i];
}

//=================== Recursion - Functional ======================
var nums = [1,2,3,4,5,5];
var acc = 0;
//var a = nums.reduce((acc, current) => acc + current); // javascript reduce

var a = _.reduce(nums, (acc, current) => acc + current);    // lodash reduce
//console.log(a);

//=================== Recursional sum ======================
// function sum(arr){
//     if(_.isEmpty(arr)) return 0;
    
//     return _.first(arr) + sum(_.rest(arr));
// }

//=================== javascript tree ======================
class Node{
    constructor(val){
        this._val = val;
        this._parent = null;
        this._children = [];
    }

    isRoot(){
        return isValid(this._parent);
    }

    get children(){
        return this._children;
    }
        
    hasChildren(){
        return this._children.length > 0;
    }

    get value(){
        return this._val;
    }

    set value(val){
        this._val = val;
    }

    append(child){
        child.parent = this;
        this._children.push(child);
        return this;
    }

    toString(){
        return `Node (val : ${this._val}, children : ${this._children}`;
    }
}