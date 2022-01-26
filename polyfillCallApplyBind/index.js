const obj1 = {
    name : "amit",
    class :"third",
    
}

const obj2 = {
    name : "akshit",
    class :"fifth",
    
}

function detail(marks,status,third,forth){
    console.log(`${this.name} is in ${this.class} class and scored ${marks} marks and u ${status} and new var ${third} ${forth} `)
}






// call polyfill

Function.prototype.call = function(obj,...args){
    const useFun = this
    let newObj = {...obj,fn : useFun};
    newObj.fn(...args)
}

detail.call(obj1,50,"pass",8,10)




//apply polyfill


Function.prototype.apply = function(obj,args){
    const useFun = this
    let newObj = {...obj,fn : useFun};
    newObj.fn(...args)
}

detail.apply(obj1,[50,"pass",8,10])




// bind polyfill


Function.prototype.bind = function(obj,...firstArgs){
    const useFunc = this
    return function(...secondArgs){
        useFunc.call(obj,...firstArgs,...secondArgs)
    }
    
}

detail.bind(obj1,50,"pass",8)(10);
// or
let stu = detail.bind(obj1,50,"pass",8);
stu(10)

