// Задача 1: Объект coffeeMachine

let coffeeMachine = {
    water: 0,
    addwater(addwaterX) {
        this.water = this.water + addwaterX;
        alert("для приготовления кофе идет наполнение воды")
    },
    makeCoffee() {
        if (this.water >= 100) {
            this.water = this.water - 100;
            alert("идёт приготовление одной чашки кофе")
        } else {
            alert("для приготовления не хватает воды")}
    },
    showWater () {
       alert(`остаток воды в кофемашине после приготовления кофе ${this.water} мл`);
    }  
}
coffeeMachine.addwater(150)
coffeeMachine.makeCoffee()
coffeeMachine.showWater()




// Задача 2.


function microwave(foodName, seconds) {
    this.putFood = foodName;
    this.setTime = seconds;

    this.start = function() {
        alert(`Подогреваем ${this.putFood} ${this.setTime} секунд!`)
    } 
    if (foodName = null   || seconds == 0) {
    alert("Ошибка") 
} 
}

let food = new microwave("фуагра", "95")
food.start()
console.log(food)

