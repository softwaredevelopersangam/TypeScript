export let cl = console.log;

// type alieases

type Comb = number | string;
type Convert = 'as-number'| 'as-string';

function CombineConvert(n1:Comb, n2:Comb, convertNS:Convert){
    let result ;
    if((typeof n1 === 'number' && typeof n2 === 'number') || convertNS === 'as-number' ){
        result = +n1 + +n2;
    }else{
        result = n1.toString() + n2.toString();
    };
    return result
};
// let add1 =CombineConvert(100,200, 'as-string');
// cl(add1, typeof add1);
// console.warn(add1, typeof add1);

// let add2 = CombineConvert(10,"20", 'as-string');
// cl(add2, typeof add2);
// let add3 = CombineConvert(10,"20", 'as-number');
// cl(add3, typeof add3);


function CombineConvert1(n1:Comb, n2:Comb, convertNS:Convert){
    let result ;
    if(typeof n1 === 'number' && typeof n2 === 'number'){
        result = n1 + n2;
    }else{
        result = n1.toString() + n2.toString();
    };
    if(convertNS === 'as-number'){
        result = +result;
    }else{
        result = result.toString()
    }
    return result
};
// let ad1 =CombineConvert1(100,200, 'as-string');
// console.warn(ad1, typeof ad1)
// let ad2 = CombineConvert1(10,"20", 'as-string');
// console.warn(ad2, typeof ad2)
// let ad3 = CombineConvert1(10,"20", 'as-number');
// console.warn(ad3, typeof ad3)




// function return type
// Telling in Advance to the function which type of data is he going to return type;


function addition(n1:number, n2:number):number{
    return n1 + n2
};
let plus = addition(222,222) 
cl(plus);
console.warn(plus, typeof plus);

function addition1(n1:number, n2:number):string{
    return n1 + n2 + '';
};
let plus1 = addition1(111,111);
cl(plus1)
console.warn(plus1, typeof plus1);

function addition2(n1:Comb, n2:Comb):Comb{
    if(typeof n1 === "number" && typeof n2 === "number"){
        return n1 + n2
    }else{
        return n1.toString() + n2.toString();
    }
};
console.warn(addition2(10,20));
console.warn(addition2(10,"20"));

interface Iproduct{
    id:string,
    price:number,
    tags:string[],
    detailes:Idetailes,
};
interface Idetailes{
    title : string,
    description : string,
    specialization :string[]
};

let product:Iproduct = {
    id : 'adc123',
    price : 14.90,
    tags : ['Greate-Offere', 'Latest Trend', 'Most Popular'],
    detailes:{
        title : 'i Phone 14',
        description : 'old wine in new bottle',
        specialization : ['camera', 'lock-sytem']
    }
};

let product1:Iproduct ={
    id : 'abc456',
    price : 15.90,
    tags : ['Greate-Offere', 'Latest Trend', 'Most Popular'],
    detailes:{
        title : 'i phone 13',
        description : 'old wine in new Bottle',
        specialization : ['camera', 'lock-sytem']
    }
};

// console.warn(product);
// console.warn(product1);

let iphone:Iproduct[] = [
    product, product1
];

console.warn(iphone);



// function return type number;

function returnnumber(num1:number, num2:number):number{
    return num1 + num2
};
let a = returnnumber(10,20);
// let b = returnnumber(10,'20'); // 1020 but it is typescript error
console.warn(a);
// console.warn(b);


// function return type string;

function returnstring(num1:number, num2:number):string{
    return num1 + num2 + ''
}
let c = returnstring(10,10);
// let d = returnstring(10, '10'); // 10,10 but is typescript error
console.warn(c, typeof c);
// console.warn(d, typeof d);


// function return type void

function returnvoid(num1:number, num2:number):void{
    // return num1 + num2
    console.warn(num1 + num2);    
}
returnvoid(10,20);
// returnvoid(10, '20') error


function returnnumberOrstring(num1:Comb, num2:Comb):number|string{
    // return num1 + num2 //this work but error show as
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }else{
        return num1.toString() + num2.toString();
    };
};
let e = returnnumberOrstring(10,10)
let f = returnnumberOrstring(10,"10")
console.warn(e, typeof e);
console.warn(f, typeof f);


// types interfase;

interface Imobile{
    id : Comb,
    price : number,
    tags : string[],
    detailes : Idetailes
}

let mobile:Imobile = {
    id : 12,
    price : 30000,
    tags : ['latest lounch'],
    detailes :{
        title : 'Samsung s1',
        description:'',
        specialization:['']
    }
};
let mobile1:Imobile ={
    id : "asdf1234",
    tags : ['latest lounch'],
    price : 50000,
    detailes:{
        title : 'samsung flip',
        description : '',
        specialization:[''],
    }
};

let mobiles:Imobile[]=[
    mobile, mobile1
];
console.warn(mobile);
console.warn(mobile1);
console.warn(mobiles);


let vivoMobile:Imobile[]=[
    {
        id: 123,
        tags :["html"],
        price : 123,
        detailes :{
            title :"s",
            description :"",
            specialization : [""]
        }

    }
]

