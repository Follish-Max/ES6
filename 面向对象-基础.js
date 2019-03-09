function User(name, pass) {
    this.name = name
    this.pass = pass
}
User.prototype.showName = function () {
    console.log(this.name)
}
User.prototype.showPass = function () {
    console.log(this.pass)
}
var per = new User('follish','123456')
per.showName()
per.showPass()

//老版本继承
function VipUser(name, pass, level) {
    User.call(this, name, pass)
    this.level = level
}
VipUser.prototype = new User()
VipUser.prototype.constructor = VipUser
VipUser.prototype.showLevel = function () {
    console.log(this.level)
}
var per1 = new VipUser('follish', '123456789', 1)
per1.showName()
per1.showPass()
per1.showLevel()

//==============================================================
//ES6新版面向对象
    //有了class关键字、构造器
    //class里面直接加方法
    //继承，super超类==父类
class Person {
    constructor(name,pass) {
        this.name = name
        this.pass = pass
    }
    showName() {
        console.log(this.name)
    }
    showPass() {
        console.log(this.pass)
    }
}
var person = new Person('jack','123123')
person.showName()
person.showPass()

//ES6新版本继承

class Stu extends Person{
    constructor(name, pass, level) {
        super(name, pass)
        this.level = level
    }
    showLevel(){
        console.log(this.level)
    }
}
stu = new Stu('jack', '123123', 4)
stu.showLevel()