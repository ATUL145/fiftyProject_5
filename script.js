/*const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if (idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)

//practice for oop//
//creating pf object through constructor function
//blueprint for object
const Person = function (firstname, birthyear) {
    this.firstname = firstname,
        this.birthyear = birthyear

    //now constructor can have methods but use prototype inheritence to add method
}

const Atul = new Person("Atul", 1995);//creating instance of constructor function
//console.log(Atul)// new refers to returning this keyword and calling the function

const sonu = new Person("sonu", 1999)// sample from blueprint
//console.log(sonu)

//prototypes--property



Person.prototype.calAge = function () {
    //console.log(2023 - this.birthyear)
}


//console.log(Atul.__proto__);
//console.log(Person.prototype.constructor);

//built in proto////
//class by declaration
class Persona{
    constructor(firstname,birthyear){
        this.firstname=firstname,
        this.birthyear=birthyear
    }

    greet(){
        console.log(`${this.firstname} yadaa has age of ${2023-this.birthyear}`)
    }


}

const Papa=new Persona("RKY",1959);

//classses are basically function
//inheritence between classes and constructor function
//function a(){} ==class a{} are same to create objects and methods
//classes are executed in use strict mode//
//
//constructor--------------->prototype1------>>object(instance)
//----------------------------
*/



//callback hell//



/*setTimeout(function () {
    h1.style.color = "red";
    setTimeout(function () {
        h1.style.color = "red"
        setTimeout(function () {
            h1.style.color = "blue"
            setTimeout(function () {
                h1.style.color = "green"
                setTimeout(function () {
                    h1.style.color = "black"
                }, 1000)
                setTimeout(function () {
                    h1.style.color = "pink"
                }, 1000)
                setTimeout(function () {
                    h1.style.color = "white"
                }, 1000)
            }, 1000)
        }, 1000);

    }, 1000);

}, 1000)
h1.innerText = "Hi There!"
const jokecontainer = document.querySelector(".jokecontainer")
const joke = document.querySelector(".joke");
const punch = document.querySelector(".punch");
const button = document.querySelector(".btn")




const jokePromise = function () {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(request => request.json())
        .then(data => {
            console.log(data)
            joke.innerText = data.setup
            punch.innerText = data.punchline

            punch.style.color = "red"
        })
        .catch(err => console.log(err))

}

button.addEventListener("click", () => {
    jokePromise()
})*/


//expression fetch consuming
/*const randomUser=function(){
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
.then(request=>request.json())
.then(data=>{
    console.log(data)
})


}
randomUser()*/


//event loop
/*console.log("I goes in execution context");
setTimeout(()=>console.log(" I am asyns starts just after end of 0 sec"),0)
Promise.resolve("Resolved Promise 1").then(res=>console.log(res));
console.log("I am log goes in execution context in  call stack of js engine")*/



//promise//

/*const lottery=new Promise((resolve,reject)=>{
  
    setTimeout(()=>{
        if(Math.random()>=0.5){
            resolve("You win")
        }else{
            reject("You Lost Your Money")
        }
      
    },2000) 
})

lottery.then(res=>console.log(res))
.catch(err=>console.error(err))*/



///consuming promises with async and await


//use async before any function
//use await for promise state
//store promise value in variable
//

/*onst web=async function(){
    const res= await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const data=await res.json()
    console.log(data.bpi.EUR.rate)

}
web()*/


















