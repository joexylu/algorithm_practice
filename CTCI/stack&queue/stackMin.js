class StackMin{
    constructor(){
        this.data = [];
        this.allMins = [];
        this.min = -Infinity;
        this.length = 0;
        this.top
    }

    pushToStack(num){
        if(this.length === 0){
            this.data.push(num);
            this.min = num
            this.allMins.push(this.min)
        }else{
            if(num < this.min){
                this.min = num
                this.allMins.push(this.min)
            }
            this.data.push(num)
        }
        this.top = this.data[-1];
        this.length ++
    }

    popToStack(){
        if(this.length === 0){
            return false
        }

        let popNum = this.data.pop();
        if(popNum === this.min){
            this.allMins.pop();
            this.min = this.allMins[-1]
        }

        this.length--

        return popNum
    }

    peek(){
        return this.data[-1]
    }
}

