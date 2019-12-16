//========== 2-3 closure =============================================

var outerVar = 'Outer';

function makeInner(Params){
    var innervar = "inner";

    function inner(){
        console.log(
            `${outervar}, ${innervar}, ${Params}`
        );
    }

    return inner;
}

var inner = makeInner('Params');
inner();