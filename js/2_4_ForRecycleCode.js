//=================== Pipe line ======================
// trim :: String -> String
const trim = (str) => str.trim(/^\s*|\s*$/g, '');

// mormalize :: String -> String
const normalize = (str) => str.replace(/\-/g, '');

//console.log(normalize(trim("444-444-4444")));

//=================== Tuple ======================
const Tuple = function(){
    const typeInfo = Array.prototype.slice.call(arguments);
    const _T = function(){
        const value = Array.prototype.slice.call(arguments);
        if(value.some(
            val => val === null || val === undefined)){
                throw new ReferenceError("Tuple can not has null");
        }
        if(value.length !== typeInfo.length){
            throw new ReferenceError("Not match between Tuple argument and prototype");
        }
        value.forEach((val, index)=> {
            this['_'+(index + 1)] = checkType(typeInfo[index])(val);
        }, this);
        Object.freeze(this);
    };
    _T.prototype.values = () => {
        return Object.keys(this)
            .map(k => this[k], this);
    }
    return _T;
}

const Status = Tuple(Boolean, String);

//=================== Curry ======================
//curry(f) :: ((a,b,c) -> d) -> a -> b -> c -> d
function curry2(fn){
    return function(firstArg){
        return function(secondArg){
            return fn(firstArg, secondArg);
        }
    }
}

//=================== Check type ======================
//check type :: Type -> Object -> Object
const checkType = R.curry((typeDef, obj) => {
    if(!R.is(typeDef, obj)){
        let type = typeof obj;
        throw new TypeError(`Incorrect Type`);
    }
    return obj;
});

// const logger = new Log4js.getLogger('student');
// logger.info('asdasd');

//=================== Compose ======================
const str = `We can only see a short distance ahead but we can see plenty there that needs to be done`;

const explode = (str) => str.split(/\s+/);

const count = (arr) => arr.length;

const countWords = R.compose(count, explode);

//console.log(countWords(str));

//=================== Compose functional library ======================
const student = ['Rosser', 'Turing', 'Kleene', 'church'];
const grade = [80, 100, 90, 99];

const smartSrudent = R.compose(
    R.head,
    R.pluck(0),
    R.reverse,
    R.sortBy(R.prop(1)),
    R.zip
);

//console.log(smartSrudent(student, grade));

//=================== I - combination ======================
// identity :: (a) -> a

//=================== (Tab) K - combination ======================
// tap :: (a -> *) -> a -> a

//=================== OR - combination ======================
const alt = function(func1, func2){
    return function(val){
        return func1(val) || func2(val);
    }
};

const altTest = alt( (val) => null, (val) => val )(10);
//console.log(altTest);

const altRLambda = R.curry((func1, func2, val) => func1(val) || func2(val));
//console.log(altRLambda((val) => null, (val) => val , 245));

const altLambda = (func1, func2) => (val) => func1(val) || func2(val);
//console.log(altLambda((val) => null, (val) => val)(245));
 
//=================== S - combination ======================
const seq = function(){
    const funcs = Array.prototype.slice.call(arguments);
    return function(val){
        funcs.forEach(function (fn){
            fn(val);
        });
    }
}

//=================== Fork - combination ======================
//              input
//                |
//         ---------------
//        |               |
//     function1        function2
//        |               |
//         ---------------
//                |
//               join
const fork = function(join, func1, func2){
    return function(val){
        return join(func1(val), func2(val));
    };
};

const ww = fork((v1, v2) => v1 + v2, (val) => val +1, (val) => val + 2);
//console.log(ww(20));



// function findBV(people){    // 재귀함수
//     if(people.length === 1 && people[0].child === null){    // 만약 자식의 갯수가 1이고 자식을 더이상 가지지 않을때 리턴받음
//         people[0].BV = people[0].PV;    // 최하위의 사람의 BV는 PV 이다.
//         return people[0].PV;
//     } 
    
//     people.array.forEach(element => {
//         element.BV = element.PV + findBV(element.child);    // 각 자식들의 노드들의 BV를 합은 곧 부모의 PV가 된다.
//     });
// }

// function main(){
//     /*
//      *  BV구하기 리스트를 만드는것은 나중문제라고 판단. 각 트리의 BV 계산에 집중함.
//     */
//     findBV(findHiestPeople()); // 최상위 포식자들의 배열을 입력받음
// }

// let result = new Array();



// function findBV(people){    // 재귀함수
//     if(people.length === 1 && people[0].child === null){    // 만약 자식의 갯수가 1이고 자식을 더이상 가지지 않을때 리턴받음
//         people[0].BV = people[0].PV;    // 최하위의 사람의 BV는 PV 이다.
//         return people[0].PV;
//     } 
    
//     people.array.forEach(element => {
//         element.BV = element.PV + findBV(element.child);    // 각 자식들의 노드들의 BV를 합은 곧 부모의 PV가 된다.
//     });
// }