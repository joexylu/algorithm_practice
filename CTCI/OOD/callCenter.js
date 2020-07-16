//all three ranks of employees have different work to be done.
//
//finally, call handle class would route call to correct person


class CallHandler{
    constructor(){
        this.numRespondents = 10;
        this.numManagers = 4;
        this.numDirector = 2;

        this.employeeLevel = ["respondents", "managers", "directors"]

        this.callQuere = [];

    }

    getHandlerCall(call){

    }

    dispatchCall(caller){
        let call = new CallHandler(caller)
        dispatchCall(call)
    }




}


class Call{
    constructor(caller, rank){
        this.caller = caller
        this.rank = rank

        this.handler = new Employee()
    }

    call(caller){
        let rank = this.rank
        let caller = caller
    }

    
}