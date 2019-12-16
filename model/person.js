class Person{
    constructor(firstname, lastName, ssn){
        this._firstName = firstname;
        this._lastName = lastName;
        this._ssn = ssn;
        this._address = null;
        this._bithdayYear = null;
    }

    get ssn(){
        return this._ssn;
    }

    get firstname(){
        return this._firstName;
    }
    
    get lastName(){
        return this._lastName;
    }

    get address(){
        return this._address;
    }

    get fullName(){
        return `${this._firstName} ${this.lastName}`;
    }

    get bithdayYear(){
        return this._bithdayYear;
    }

    set bithdayYear(year){
        this._bithdayYear = year;
    }

    set address(address){
        this._address = address;
    }

    toString(){
        return `Person (${this._firstName}, ${this._lastName})`;
    }
}