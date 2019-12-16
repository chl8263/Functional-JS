class Student extends Person{
    constructor(firstNanme, lastName, ssn, school){
        super(firstNanme, lastName, ssn);
        this._school = school;
    }

    get school(){
        return this._school;
    }
}