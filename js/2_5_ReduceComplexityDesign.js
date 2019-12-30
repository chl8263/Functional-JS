//=================== Wrap value into functional data type  ======================
class Wrapper{
    constructor(value){
        this._value = value;
    }

    // map :: (A -> B) -> A -> B
    map(f){
        return f(this._value);
    };

    fmap(f){
        return new Wrapper(f(this._value));
    }

    toString(){
        return `Wrapper (${this._value})`;
    }
}

const wrap = new Wrapper("get Functional");

const wrapExam = wrap.map( (val) => val + 'asdasd');

//const wrapIdentity = wrap.map(R.identity);
const wrapIdentity = wrap.map(R.toUpper);

//console.log(wrapIdentity);

//=================== functor  ======================
const plus = R.curry((a,b) => a + b);
//console.log(typeof plus(2)(3));
const plus3 = plus(3);
const plus10 = plus(10);

const two = new Wrapper(2);

const five = two.fmap(plus3);

//console.log(five); //Wrapper {_value : 5}

//console.log(five.map(R.identity)); // 5

//console.log(two.fmap(plus3).fmap(plus10));


class Empty{
    map(f){
        return this;
    }

    fmap(_){
        return new Empty();
    }

    toString(){
        return `Empty ()`;
    }
}

const empty = () => Empty();

const isEven = (n) => Number.isFinite(n) && (n%2 ==0);

const half = (val) => isEven(val) ? new Wrapper(val/2) : new Empty();

//console.log(half(3));

//=================== Wrapper monad ======================

class MonadWrapper{
    constructor(value){
        this._value = value;
    }

    static of(a){
        return new MonadWrapper(a);
    }

    map(f){
        return MonadWrapper.of(f(this._value));
    }

    join(){
        if(!(this._value instanceof MonadWrapper)){
            console.log(this);
            return this;
        }
        return this._value.join();
    }

    get(){
        return this._value;
    }

    toStrin(){
        return `MonadWrapper (${this._value})`;
    }
}

const moand = MonadWrapper.of("Hello monad").map(R.toUpper).map(R.identity);
//console.log(moand);

const monadJoin = MonadWrapper.of(MonadWrapper.of(MonadWrapper.of('getMoand'))).join();

//console.log(monadJoin);

//=================== Maybe ======================



