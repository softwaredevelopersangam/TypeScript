// let cl =console.log;

class DepartMent{
    private empArray:string[] = [];
    constructor(public readonly name: string, private id : string){}
    describe(){
        return `The name of Department ${this.name} and id is ${this.id}`
    }
    addEmp(emp:string){
        this.empArray.push(emp);
    };
    printNoOfEmp(){
        return this.empArray;
    }
}

let accounting = new DepartMent('Accounting', '123');
accounting.addEmp('sangam');
accounting.addEmp('wadle');
// accounting.name = 'It'
cl(accounting)
cl(accounting.printNoOfEmp());

//private properties are only available within the class where we can modife them
//but readonly properties we can not modify them within a class as well
// both private and readonly properties will not avaiable on there instance/object.