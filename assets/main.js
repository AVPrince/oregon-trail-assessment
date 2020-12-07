class Traveler {
    constructor(name){
        this.name = name;
        this.food = 1; 
        this.isHealthy = true; 
    }
    hunt(){
        this.food+=2;
    }
    eat(){
        this.food -= 1;
        if(this.food === 0) {
            this.isHealthy = false;
        } else {
            this.food -= 1;
        }
    }
}

// let t = new Traveler("Name");
// console.log(t.food);
// t.eat();
// console.log(t.food);

class Wagon {
    constructor(capacity){
        this.capacity = capacity;
        this.passengers = [];
    }
    getAvailableSeatCount(){
        return this.capacity -= this.passengers.length;
    }   
    join(traveler){
        if(this.passengers.length < this.capacity){
            this.passengers.push(traveler);
        } 
        // If the wagon is already at maximum capacity, don't add them.
    }
    shouldQuarantine(){
        for (let i = 0; i < this.passengers.length; i++){
            if (this.passengers[i].isHealthy === false) {
             return true
            }
        }
        return false
        //  if there is at least one unhealthy person in the wagon. Return false if not.
    }
    totalFood(){
        let total = 0;
        for (let i = 0; i < this.passengers.length; i++) {
            total += this.passengers[i].food;
        } 
        return total
        // Returns the total amount of food among all passengers in the wagon.
    }
}

