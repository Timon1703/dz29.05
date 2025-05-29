// задача 2

function microwave(foodName, seconds) {
    this.putFood = foodName;
    this.setTime = seconds;

    this.start = function() {
        alert(`Подогреваем ${this.putFood} ${this.setTime} секунд!`)
    }
}
// if (foodName = null || seconds == 0) {
//     alert("Ошибка")
// }
let food = new microwave("фуагра","95")
food.start()

// задача 1

let coffeeMachine = {
    water: 0,
    addwater() {
        this.water++;
        return this
    },
    makeCoffee() {
        this.water-100;
        return this
    },
    showWater function() {
        alert(this.water);
        return this
    }
}