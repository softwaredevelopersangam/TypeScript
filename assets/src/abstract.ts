abstract class AccountingDepartment {
    private empArray : string []= []; 
    constructor(public readonly name: string, protected id : number,){};
    abstract disCribe():void;
    addEmp(emp:string):void{
        this.empArray.push(emp);
    }
    printNOfemp():void{
        console.log(`Accounting Department Total Working Emp:${this.empArray.length}`);
    }
};

class Education extends AccountingDepartment{
    private lastStudent : string;
    constructor(protected id : number,private totalStudent : string[]){
        super('Education',id);
        this.lastStudent = totalStudent[totalStudent.length-1];
    };
    disCribe(): void {
        console.log(`Accounting Department: ${this.name}`);
    };
    addStudent(student:string){
        this.lastStudent = student;
        this.totalStudent.push(student);
    }
    get accessLaststudent(){
        if(this.lastStudent){
            return this.lastStudent;
        }else{
            throw new Error('No Student Available here...');
        };
    };
    set accessLaststudent(val:string){
        this.totalStudent.push(val);
        this.lastStudent = val;
    }
};

let skill = new Education (123, []);
skill.addEmp('sangam');
skill.addEmp('radhika');
skill.addStudent('Pramod');
skill.addStudent('kiran');
skill.addStudent('sonu')
skill.printNOfemp();
skill.disCribe();
console.warn(skill);
console.warn(skill.accessLaststudent);
skill.accessLaststudent = 'Pankaja';
console.log(skill);
