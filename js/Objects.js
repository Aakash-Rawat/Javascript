// Objects
// Key-Value pairs in curly braces
// objects can store string,number,boolean,array,objects(yes objects can store objects), methods

const myObj = { name : "Aakash"}
console.log(myObj.name);

const anotherObj = {
    alive: true,
    answer : 42,
    hobbies : ["eat","sleep","code"],
    beverage : {
        morning : "coffee",
        afternoon : "Iced Tea"
    },
    action: function(){
        return "hello world";
    },

    time: function(){
        return `Time for ${this.beverage.morning}`
    }
}

// "this" keyword refers to the main object inside which we are using "this" keyword

console.log(anotherObj.alive);
console.log(anotherObj.hobbies[0]);
console.log(anotherObj.beverage.morning);
console.log(anotherObj.action());
console.log(anotherObj.time());


const vehicle = {
    wheels:4,
    engine : function()
    {
        return "vroooooooom"
    }
}

//Here it is called inheritence. We created an object vehicle and the truck object is inheriting the properties of object vehicle.


const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);  // Inheritence
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function(){
    return "wooooooosh";
}
console.log(car.engine());
console.log(car.doors);
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function(){
    return "Shhhhhh..."
}
console.log(tesla.engine());

// "for in" loop

const band ={
    vocals : "aakash",
    guitar : "abhishek",
    bass : "pawan",
    drums : "akhil"
}

// To delete existing propery or method in obejct we use "delete" keyword
delete band.drums;

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band){
    console.log(`On ${job}, it's ${band[job]}!`);    
}


// Destructuring Objects
const {guitar : myVariable , bass : myBass} = band;
console.log(myVariable); 
console.log(myBass); 


// instead of changing name of keys we can directly use key name as it is
const {guitar, vocals} = band;
console.log(guitar);
console.log(vocals);



