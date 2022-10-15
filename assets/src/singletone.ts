// class Department {
//     static instance:Department;
//     private empArray : string [] = [];
//     private constructor(public readonly name: string, protected id: number) {};
//     addemp(emp:string){
//         this.empArray.push(emp);
//     };
//     desCribe(this:Department){
//         console.log(`Department Name :=>> ${this.name}`);
//     };
//     static getinstanceOfA(){
//         if(Department.instance){
//             return this.instance;
//         }else{
//             this.instance = new Department('Accounting', 123)
//             return this.instance
//         }
//     }
// };
// console.log(Department.instance);
// let skill = Department.getinstanceOfA();
// console.log(skill);
// let skill1 = Department.getinstanceOfA();
// console.log(skill1);


class Accounting {
    private lastReport : string;
    private empArray: string[] = [];
    constructor(public readonly name: string, protected id: number, private taxReport:string[]){
        this.lastReport = taxReport[taxReport.length - 1];
    };
    addEmp(emp:string):void{
        this.empArray.push(emp);
    };
    printNoOfEmp(this:Accounting):void{
        console.warn(this.empArray.length);
    };
    describe(this:Accounting){
        console.warn(`Accounting Name => ${this.name}`);
    };
    addTaxReport(report:string){
        this.taxReport.push(report);
    }
    get accessLastrepot()   {
        if(this.lastReport){
            return this.lastReport
        }else{
            throw new Error('Not Available Last Report');
        }
    }
    set accessLastrepot(val:string){
        this.taxReport.push(val);
        this.lastReport = val
    };
};

let skill = new Accounting('TaxAccounting',2332,['kiran']);
skill.addEmp('Kiran');
skill.printNoOfEmp();
console.log(skill);
skill.describe();
skill.addTaxReport('radhika')
skill.accessLastrepot = 'Sangam'
console.warn(skill.accessLastrepot);


class ItDepartment extends Accounting{
    static instance : ItDepartment;
    private constructor(protected id : number){
        super('ItDepartment', id,[''])
    }
    static getinstance(){
        if(ItDepartment.instance){
            return this.instance
        }else{
            this.instance = new ItDepartment(123);
            return this.instance;
        }
    }
};

console.warn(ItDepartment.instance);
let inst = ItDepartment.getinstance();
console.warn(inst);
// console.warn(ItDepartment.instance);
let inst1 = ItDepartment.getinstance();
console.warn(inst1);

inst.addEmp('sangam');
inst.addEmp('radhika')
// console.warn(inst);
// console.warn(inst1);




