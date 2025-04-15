// Classes

class pizza{
    constructor(pizzaType){
        this.type = pizzaType;
        this.size = "medium";
        this.crust = "original";
        this.topping = [];
    }

    getCrust(){
        return this.crust;
       }
    
   setCrust(pizzaCrust){
        this.crust = pizzaCrust
       }

    getTopping(){
        return this.topping;
    }

    setTopping(topping){
        this.topping.push(topping)
    }


    bake(){
        console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza`);
        
    }
}

const myPizza = new pizza("pepperoni");
myPizza.setCrust("thin");
myPizza.bake();
console.log(myPizza.getCrust());
myPizza.setTopping("mushroom");
myPizza.setTopping("paneer");
console.log(myPizza.getTopping());


// Inheritence and super keyword
// super keyword is used in children class to target the property we inherit from the parent class

class car{
    constructor(engine){
        this.engine = engine;
        this.color = "white";
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
    }
}

class supra extends car {
    constructor(engine){
        super(engine);
        this.type = "mk4";
    }

    specs(){
        console.log(`Our supra ${this.type} with ${this.engine} engine is of ${this.color} color`);
        
    }
}

const mySupra = new supra("v8");
mySupra.setColor("blue")
mySupra.specs();

// Public and private variables/fields
// To make a variable private we use #
// for example :-  #size = 4;

class pasta{
    crust = "original";  //(here crust is public)
    #sauce = "traditional"; //(sauce is private)
    constructor(pastaType){
        this.type = pastaType;
        this.size = "medium";
        this.topping = [];
    }

    getCrust(){
        return this.crust;
       }
    
   setCrust(pastaCrust){
        this.crust = pizzaCrust
       }
 
    hereYouGo(){
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.size} pasta`);
        
    }   

    }

    const myPasta = new pasta("large");
    myPasta.hereYouGo();
    // console.log(myPasta.#sauce);  this gives error because sauce is private and can't be accessed outside class
    