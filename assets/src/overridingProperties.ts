

class Accouting {
    protected emplyArray: string[] = [];
    constructor(public readonly name:string, protected id : string){};
    desCribe(this:Accouting):void{
        console.log(`Accounting Department ${this.name} : ${this.id}`);
    };
    addEmp(emp:string):void{
        this.emplyArray.push(emp);
    };
    getAllemp():string[]{
        return this.emplyArray;
    };
    printNoOFemp():void{
        console.log(`Total Employe Available ${this.emplyArray.length}`);
    };
};

let accounts = new Accouting ('Accounting', '321');
accounts.addEmp('sangam');
accounts.addEmp('radhika');
accounts.printNoOFemp();
accounts.desCribe();
console.log(accounts.getAllemp())
console.log(accounts);


class TaxDepartment extends Accouting{
    constructor(private dId:string, private taxreport : string[]){
        super('TaxDepartment',dId)
    };
    addEmp(emp: string): void {
        if (emp.toLocaleLowerCase().trim() === 'sangam') {
            return;
        } else {
            this.emplyArray.push(emp);
        };
    }
    addTaxReportfiels(file:string){
        // this.taxreport = file;
        return this.taxreport.push(file);
    }
    printReportFile(){
        console.warn(this.taxreport);
    }
};
let taxdepart  = new TaxDepartment('123',[]);
taxdepart.addEmp('kiran');
taxdepart.addEmp('Ambika');
console.warn(taxdepart.addTaxReportfiels('TDS'));    
taxdepart.desCribe();
taxdepart.printReportFile();

taxdepart.addEmp('sangam');
taxdepart.addEmp('Vaishnavi')
console.log(taxdepart.getAllemp());
taxdepart.printNoOFemp();
console.log(taxdepart);

