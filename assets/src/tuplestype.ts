// tuples >> is fixed length of array;
// tuples 
// userRole => roleNo/roleName, canSeecom.Job. canSeeCandidate, CanSeeCan.and.Com.Job
// Candidate => 1 'candidate', true, false, false
// AdminHr => 2 'adminhr', false, true, false
// SuperAdmin => 3, 'superadmin', true, true, true



let person:{name:string, email:string, lname:string, userId:string,hobbies:string[],role:[number,string, boolean, boolean, boolean]}={
    name : 'Sangam',
    email : 'sangam@wadle.com',
    lname : 'Wadle',
    userId : 'rajSangam',
    hobbies : ['cricket','cooking','coding'],
    role : [0, 'candidate', true, false, false ]
};

console.log(person);
console.log(person.role);

if(person.role[1] === 'candidate'){
    console.log('can see company jobs');
};

if(person.role[1] === 'adminhr'){
    console.log('can see candidate');
};

if(person.role[1]==='superadmin'){
    console.log('can see candidate and company jobs');
};

