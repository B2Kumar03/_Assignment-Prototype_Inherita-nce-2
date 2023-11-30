
//  Using create object

let Automobile={
    startEngine:function(){
        console.log("Engine is started")
    },
    stopEngine:function(){
        console.log("Engine is stoped")
    }
}

let fourWheeler=Object.create(Automobile)

fourWheeler.drive=function(){
    console.log("four wheeler is beign driven.")
}

let car=Object.create(fourWheeler)

car.startEngine()
car.stopEngine()
car.drive()


//  Using constructor function

function Automobile1(){}

Automobile1.prototype.startEngine=function(){
    console.log("Engine is started")
}

Automobile1.prototype.stopEngine=function(){
    console.log("Engine is stopped")
}

function FourWheeler1(){}
FourWheeler1.prototype.drive1=function(){
    console.log("four wheeler is beign driven.")
}

Object.setPrototypeOf(FourWheeler1.prototype,Automobile1.prototype)


let car1=new FourWheeler1()


car1.startEngine()
car1.stopEngine()
car1.drive1()


