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

console.log(result);

//=================== Functional chaining programming ======================
_.chain(names)
    .filter(isValid)
    .map(s => s.replace(/_/, ' '))
    .uniq() // --> exclude duplicate
    .map(_.startCase)
    .sort()
    .value();

console.log(names);