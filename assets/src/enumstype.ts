// userRole => roleNo/roleName, canSeecom.Job. canSeeCandidate, CanSeeCan.and.Com.Job
// Candidate => 1 'candidate', true, false, false
// AdminHr => 2 'adminhr', false, true, false
// SuperAdmin => 3, 'superadmin', true, true, true
//enums =

enum Role {CANDIDATE =1, ADMIN_HR, SUPER_ADMIN};

let man : {name:string, lname:string, email:string, contanct:number, age:number, userId:string, hobbies:string[], role:string|number}={
    name : 'sangam',
    lname : 'wadle',
    age : 23,
    email : 'sangam@wadle.com',
    contanct:9146860793,
    userId : 'sonya',
    hobbies : ['chess', 'cricket'],
    role : 1
};
let mans : {name:string, lname:string, email:string, contanct:number, age:number, userId:string, hobbies:string[], role:string|number}={
    name : 'vaibhav',
    lname : 'somwad',
    age : 23,
    email : 'vaibhav@somwad.com',
    contanct:9146860793,
    userId : 'ravi',
    hobbies : ['chess', 'cricket'],
    role : 2
};
let ma : {name:string, lname:string, email:string, contanct:number, age:number, userId:string, hobbies:string[], role:string|number}={
    name : 'rahul',
    lname : 'joshi',
    age : 26,
    email : 'rahul@joshi.com',
    contanct:9146860793,
    userId : 'jrahul',
    hobbies : ['chess', 'cricket'],
    role : 3
};
console.log(man);
console.log(mans);
console.log(ma);

if(man.role === Role.ADMIN_HR){
    console.warn('this is a ADMIN HR SEE A CANDIDATE');
};
if(man.role === Role.CANDIDATE){
    console.warn('this is a CANDIDATE SEE A COMPANY JOBS');    
}
if(man.role === Role.SUPER_ADMIN){
    console.warn('this is a SUPER ADMIN CANDIDATE AND COMPANY SEE JOB ');    
}
if(mans.role === Role.ADMIN_HR){
    console.warn('this is a ADMIN HR SEE A CANDIDATE');
};
if(mans.role === Role.CANDIDATE){
    console.warn('this is a CANDIDATE SEE A COMPANY JOBS');    
}
if(mans.role === Role.SUPER_ADMIN){
    console.warn('this is a SUPER ADMIN CANDIDATE AND COMPANY SEE JOB ');    
}
if(ma.role === Role.ADMIN_HR){
    console.warn('this is a ADMIN HR SEE A CANDIDATE');
};
if(ma.role === Role.CANDIDATE){
    console.warn('this is a CANDIDATE SEE A COMPANY JOBS');    
}
if(ma.role === Role.SUPER_ADMIN){
    console.warn('this is a SUPER ADMIN CANDIDATE AND COMPANY SEE JOB ');    
}
console.log(Role.CANDIDATE);
console.log(Role.ADMIN_HR);
console.log(Role.SUPER_ADMIN);


