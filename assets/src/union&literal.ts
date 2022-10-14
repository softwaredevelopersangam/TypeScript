export let cl = console.log;
let cw = console.warn;

// union type and letiral


function add(n1:number|string, n2:number|string) {
    if(typeof n1 === 'number' && typeof n2 === 'number'){
        return n1 + n2
    }else{
        return n1.toString() + n2.toString();
    };
};
cl(add(10,20))
cl(add('23',23))

type Combinestringnumber = number | string;
type Convert = 'as-number'|'as-string';


function combine(n1:Combinestringnumber,n2:Combinestringnumber){
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number'){
        result = n1 + n2;
        cw(typeof result);
    }else{
        result = n1.toString() + n2.toString();
        cw(typeof result);
    }
    return result
};
cl(combine(20,20));
cl(combine(20,'20'));

//literial


function typeconver(n1:Combinestringnumber,n2:Combinestringnumber,changetype:Convert){
   let result;
    if(typeof n1 === 'number' && typeof n2 === 'number'){
    result = n1 + n2;
   }else{
    result = n1.toString() + n2.toString();
   };
   if(changetype === 'as-number'){
    result = +result
   }else{
    result = result.toString();
   }
   return result;
};

let add1 = typeconver(10,20,'as-number');
let add2 = typeconver(10,20, 'as-string');
let add3 = typeconver(10,'20', 'as-number');
let add4 = typeconver('sangam', 20, 'as-number');
let add5 = typeconver('sangam',20,'as-string');

cw(add1);
cl(typeof add1)
cw(add2);
cl(typeof add2)
cw(add3);
cl(typeof add3)
cw(add4);
cl(typeof add4)
cw(add5);
cl(typeof add5)
