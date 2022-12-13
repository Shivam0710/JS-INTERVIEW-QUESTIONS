let myObj = {
    "name": "Shivam",
    "age": 21,
    "sayHello": function(message) {
        console.log(this.name, this.age, message)
    }
}

Function.prototype.myBind = function(obj, ...args1) {
    let cb = this;
    return function(...args2) {
        let arguments = [...args2, ...args1]
        cb.apply(obj, arguments)
    }
}

let user = { "name": "Some", "age": 18 }
let a = myObj.sayHello.myBind(user, "HELLO")
a();