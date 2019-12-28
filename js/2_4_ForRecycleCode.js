//=================== Pipe line ======================
// trim :: String -> String
const trim = (str) => str.trim(/^\s*|\s*$/g, '');

// mormalize :: String -> String
const normalize = (str) => str.replace(/\-/g, '');

console.log(normalize(trim("444-444-4444")));

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

console.log(countWords(str));

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
console.log(altLambda((val) => null, (val) => val)(245));