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




