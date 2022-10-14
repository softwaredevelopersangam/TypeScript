
// getter and setter

abstract class TaxDepartment{
    protected empArray:string [] = [];
    constructor(readonly name:string, protected id : string){};
    addEmp(emp:string):void{
        this.empArray.push(emp);
    };
    abstract describe(this:TaxDepartment):void;
    printNoOfemp():void{
        console.log(`TaxDepartement Total emp :- ${this.empArray.length}`);
    };
};
// let tax = new TaxDepartment('TAXDEPARTMENT', '123');
// tax.addEmp('sangam');
// tax.describe();
// tax.printNoOfemp();
// console.warn(tax);


class ItDepartement extends TaxDepartment{
    describe(this: TaxDepartment): void {
        console.log(`it Department ${this.name}`);
    }
    private lastServer : string;
    constructor(protected id: string, private itserver: string[]){
        super('ItDepartment', id);
        this.lastServer = itserver[itserver.length-1];
    };
    addItServer(server:string){
        this.itserver.push(server);
        this.lastServer = server
    };
    printItServer(){
        console.log(this.itserver);
    };
    get lastreportfiles(){
        if(this.lastServer){
            return this.lastServer;
        }else{
            throw new Error('No files Available');
        }
    };
    set lastreportfiles(val:string){
        this.itserver.push(val);
        this.lastServer = val;
    };
};
let itde = new ItDepartement ('321',[]);
itde.printItServer();
itde.addItServer('mongo db');
itde.addItServer('vires');
itde.addItServer('javascript');
console.warn(itde);
itde.describe();
itde.printNoOfemp();


itde.lastreportfiles = 'angular'
console.warn(itde.lastreportfiles);


