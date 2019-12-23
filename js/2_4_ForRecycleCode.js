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