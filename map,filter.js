var users = [
    { id : 1, name : "ID", age : 36},
    { id : 2, name : "BJ", age : 32},
    { id : 3, name : "JM", age : 32},
    { id : 4, name : "PJ", age : 27},
    { id : 5, name : "HA", age : 25},
    { id : 6, name : "JE", age : 26},
    { id : 7, name : "JI", age : 31},
    { id : 8, name : "MP", age : 23}
];

// 1. Imperative code
    // 1. Include over 30 age.
    var temp_users = [];
    for (var i=0; i< users.length; i ++){
        if(users[i].age >= 30){
            temp_users.push(users[i]);
        }
    }
    console.log(temp_users);

    // 2. Collect users name over 30 age.
    var names = [];
    for(var i = 0; i < temp_users.length; i++){
        names.push(temp_users[i].age);
    }
    console.log(names);

    // 3. Include under 3- age.
    var temp_users = [];
    for (var i=0; i< users.length; i ++){
        if(users[i].age <= 30){
            temp_users.push(users[i]);
        }
    }
    console.log(temp_users);

    // 4. Collect users name under 30 age.
    var ages = [];
    for (var i=0; i< temp_users.length; i ++){
        ages.push(temp_users[i].age);
    }
    console.log(ages);


// 2. Refactoring using _filter, _map
    // function _filter(users, predi){
    //     var new_list = [];
    //     for (var i=0; i< users.length; i ++){
    //         if(predi(users[i])){
    //             new_list.push(users[i]);
    //         }
    //     }
    //     return new_list;
    // }

    console.log(
        _filter(users, function(user){return user.age >= 30;})
    );

    console.log(
        _filter(users, function(user){return user.age < 30;})
    );

    console.log(
        _filter([1,2,3,4], function(num){return num % 2;})
    );

    console.log(
        _filter([1,2,3,4], function(num){return !(num % 2);})
    );

    // function _map(list, mapper){
    //     var new_list = [];
    //     for(var i = 0; i < list.length; i++){
    //         new_list.push(mapper(list[i]));
    //     }
    //     return new_list;
    // }

    var over_30 = _filter(users, function(user) {return user.age >= 30;});

    console.log(over_30);

    var names = _map(over_30, function (user) {return user.name;});

    console.log(names);

    var under_30 = _filter(users, function(user) {return user.age < 30;});

    console.log(under_30);

    var names = _map(under_30, function (user) {return user.name;});

    console.log(names);

    console.log(
        _map(
            _filter(users, function(user) {return user.age >= 30;}),
            function(user) {return user.name;}
        )
    );

// 3. Make 'each'
    // 1. Remove Duplicate _map, _filter using _each
        // --> go to _.js
    
// 4. External Polymorphism.
    // 1. array_like, arguments, document.querySelectorAll
    console.log(
        [1,2,3,4].map(function (val){ return val * 2; })
    );

    console.log(
        [1,2,3,4].filter(function (val){ return val == 2; })
    );

    // Can use map, filter function when value is just array.

    console.log(
        _map(document.querySelectorAll('*'), function (node){
            return node.nodeName;
        })
    );
    // document.querySelectorAll('*') do not return value type array, so Use the function which i made can do this.
    
// 5. Curring
    // 1. _curry, _curryr
        // function _curry(fn){
        //     return function(a){
        //         return function(b){
        //             return fn(a,b);
        //         }
        //     }
        // }
    function _curry(fn){
        return function(a, b){
            return arguments.length == 2 ? fn(a, b) : function(b){return fn(a,b);}
        }
    }

    var add = _curry(function(a, b){
        return a + b;
    });

    var add10 = add(10);
    
    console.log(add10);

    console.log(add10(5));

// 6. Make reduce
    function _reduce(list, iter,  memo){
        _each(list, function(val){
            memo = iter(memo, val);
        })
        return memo;
    }
    
    _reduce([1,2,3], function(a,b){
        return a + b;
    }, 0);
