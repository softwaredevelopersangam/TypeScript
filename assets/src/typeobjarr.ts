export let cl = console.log;

interface Iperson {
    fname : string,
    lname : string,
    age : Number,
    email : string,
    child : Ichild[],
    contact : number
};
interface Ichild {
    fname : string,
    lname : string,
    age : string
};

let persons:Iperson = {
    fname : 'sangam',
    lname : 'wadle',
    age : 23,
    email : 'sangam@wadle.com',
    child : [{
        fname : "sonu",
        lname : 'wadle',
        age : "2 year"
    }],
    contact : 1234567890,
};
cl(person);

let skills : string[];
skills = ['html', 'sass','css','javascript',];
skills.push('Angular');
skills.splice(3,0,'bootstrap@4', '123')
cl(skills);

function add(n1:number,n2:number, showResult:boolean, phrase:string){
    if(showResult === true){
        cl(`${phrase} ${n1+n2}`);
    }else{
        cl(`${phrase} ${n1 + n2}`);
    };
};

add(120,120,true, "ur result is true");
add(120,120,false, "ur result is false");