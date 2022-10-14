// export let cl = console.log;

// function type
function add(n1:number, n2:number):number{
    return n1 + n2
};
function mult(n1:number, n2:number):number{
    return n1 * n2
}
function sub(n1:number, n2:number):number{
    return n1-n2;
}
function printValue(n1:number, n2:number):void{
    cl(n1 + n2);
}

let add1 : (para1:number, para2:number) => number;
type calhels = (para1:number, para2:number) => number;

// add1 = add;
// cl(add1)
// add1 = mult;
// cl(add1)
// add1 = sub;
// cl(add1)

// add1 = printValue;


// function typpe callback function

function calcu(n1:number, n2:number, cb:calhels):number{
    return cb(n1,n2)
};

let add2 = calcu(10,20,add);
console.warn(add2);
let mult1 = calcu(100,100, mult);
console.warn(mult1);
let sub1 = calcu(30,15, sub);
console.warn(sub1);


// type any and unknown

// let userIfno : any;
let userIfno : unknown;

userIfno = 'Hello JavaScript';
userIfno = 1234567;
userIfno = true;

let userDetailes : string;

// userDetailes = userIfno;
// console.warn(userDetailes);

// type unknow

// if(typeof userIfno == 'string'){
//     userDetailes = userIfno
//     cl(userDetailes);
// };