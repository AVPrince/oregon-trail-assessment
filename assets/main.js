class Traveler {
    constructor(name, food){
        this.name = name;
        this.food = food;
        this.isHealthy = true;
    }
    hunt(){
        this.food+=2;
    }
    eat(meal){
        if (this.food >=meal){
        this.food-=meal;
        } if (this.food===0){
        this.isHealthy = false
        }
    }
}

class Wagon {
    constructor(capacity, passengers){
        this.capacity = capacity;
        this.passengers = passengers;
    }
    getAvailableSeatCount(seating){
        this.capacity -= this.passengers;
        return seating
    }   
    join(){
        
    }
    shouldQuarantine(){

    }
    totalFood(){

    }
}

