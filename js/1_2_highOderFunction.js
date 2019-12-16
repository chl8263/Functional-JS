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

//========== Frame of module =============================================
// var MyModule = (function MyModule(export){
//     let _myPricateVar = "private";

//     export.method1 = function(){
//         // Do somthing.
//     };

//     export.method2 = function(){
//         // Do somthing.
//     };

//     return export;
// }(MyModule || {}));