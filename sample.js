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

    get _bithdayYear(){
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

class Student extends Person{
    constructor(firstNanme, lastName, ssn, school){
        super(firstNanme, lastName, ssn);
        this._school = school;
    }

    get school(){
        return this._school;
    }
}

class Address{
    constructor(country, state, city, zip, street){
        this._country = country;
        this._state = state;
        this._city = city;
        this._zip = zip;
        this.street = street;
    }

    get street(){
        return this._street;
    }

    get city(){
        return this._city;
    }

    get state(){
        return this._state;
    }

    get zip(){
        return this._zip;
    }

    get country(){
        return this._country;
    }
}

