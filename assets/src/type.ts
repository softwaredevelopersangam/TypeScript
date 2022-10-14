let n1 = document.getElementById('num1')! as HTMLInputElement;
let n2 = document.getElementById('num2')! as HTMLInputElement;
let addbtn = document.getElementById('btnSubmit')!;

function additional (num1:number,num2:number){
    return num1 + num2
};

addbtn.addEventListener('click', ()=>{
    console.log(additional(+n1.value , +n2.value));
});
