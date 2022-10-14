let cl =console.log;

class DepartMent{
    protected empArray:string[] = [];
    constructor(public readonly name: string, private id : string){}
    describe(){
        return `The name of Department ${this.name} and id is ${this.id}`
    };
    addEmp(emp:string){
       return this.empArray.push(emp);
    };
    printNoOfEmp(){
        return this.empArray.length;
    };
};

let accounting = new DepartMent('Accounting', '123');
accounting.addEmp('rk');
cl(accounting);
cl(accounting.printNoOfEmp())
cl(accounting.describe())


class ItdepartMent extends DepartMent{
    constructor(private itId : string, private addItReports : string[]){
        super('Itdepartment', itId);
    };
    addItReport(report:string){
        return this.addItReports.push(report);
    };
    // overriding properti
    addItemp(emp:string){
       return this.empArray.push(emp);
    }
};

let it = new ItdepartMent('789', []);
cl(it);
it.addEmp('sangam')
cl(it.addItReport('software devolopment'))
cl(it.addItemp('vaibhav somwad'))
cl(it);
// cl(it.printNoOfEmp);
// cl(it.describe);




