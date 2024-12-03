// function Icecream(flavor) {
//     this.flavor = flavor;
//     this.meltIt = function() {
//         console.log(`The ${this.flavor} icecream has melted`);
//     }
// }


// var clothes = [];
//   clothes.push('gray t-shirt');
//   clothes.push('green scarf');
//   clothes.pop();
//   clothes.push('slippers');
//   clothes.pop();
//   clothes.push('boots');
//   clothes.push('old jeans');

//   console.log(clothes)


// var food = [];
//   food.push('Chocolate');
//   food.push('Ice cream');
//   food.push('Donut');

//   console.log(food[1])

// var dog = {
//     color: "brown",
//     height: 30,
//     length: 60
// };
// dog["type"] = "corgi";

// console.log(dog)


// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (let i = 0; i < dishData.length; i++) 
    {
        let finalPrice;
        if (taxBoolean === true) {
            finalPrice = dishData[i].price * tax;
        }
        else if (taxBoolean === false) {
            finalPrice = dishData[i].price;
        }
        else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        console.log(`Dish: ${dishData[i].name} Price: $${finalPrice}`);
    }
    
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
    if (typeof guests === "number" && guests > 0 && guests < 30) {
        let discount = 0;
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }
        console.log(`Discount is: $${discount}`);
    } else {
        console.log("The second argument must be a number between 0 and 30");
    }
}

// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 10);

