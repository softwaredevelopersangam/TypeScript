// let cl =console.log;

class DepartMents{
    name : string;
    empArray:string[] = [];
    id : string;
    constructor(n:string, id:string){
        this.name = n;
        this.id = id;
    }
    describe(){
        return `The name of Department ${this.name} and id is ${this.id}`
    }
}

let accountings = new DepartMents('Accounting', '123');
cl(accountings);
cl(accountings.name)
cl(accountings.describe());
// cl(accounting.id)

