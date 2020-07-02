//three stack in one

// first stack 0, 3, 6, 9; second 1,4,7,10; third 2, 5,8,11
class NStack{
    constructor(n){
        this.stacks = [];
        this.size = new Array(n).fill(0)
    }


    peek(i){
        return this.stack[i+(this.size[i]-1)*this.size.length]
    }

    pop(i){
        if(this.size[i]> 0){
            return this.stack.splice(i+(--this.size[i] * this.size.length),1)
        }
    }

    push(i, num){
        if(this.size[i] >= 0){
            this.stack[i+((this.size[i]++) * this.size.length)] = num
        }
    }

}


