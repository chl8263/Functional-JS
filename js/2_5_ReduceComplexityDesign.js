//=================== Wrap value into functional data type  ======================
class Wrapper{
    constructor(value){
        this._value = value;
    }

    // map :: (A -> B) -> A -> B
    map(f){
        return f(this.value);
    };

    toString(){
        return `Wrapper (${this.value})`;
    }
}

const wrap = new Wrapper("aa");

console.log(wrap);