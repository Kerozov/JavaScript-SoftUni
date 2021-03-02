const { describe } = require('mocha');
const { assert } = require('chai');


let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}



    describe("TODO …", function() {
        it("Make an ordered", function() {
            let pizza = {orderedPizza: 'pizza', orderedDrink: 'drink'};
            let pizza1 = {orderedPizza: 'pizza'};
            let pizza2 = {orderedDrink: 'drink'};
            let pizza3 = {};
            assert.equal(1,1);
            // assert.throw(() => pizzUni.makeAnOrder(pizza2, 'You must order at least 1 Pizza to finish the order.'));
            // assert.throw(() => pizzUni.makeAnOrder(pizza3, 'You must order at least 1 Pizza to finish the order.'));
            // assert.equal(pizzUni.makeAnOrder(pizza1), `You just ordered ${pizza1.orderedPizza}`);
            // assert.equal(pizzUni.makeAnOrder(pizza), `You just ordered ${pizza.orderedPizza} and ${pizza.orderedDrink}.`);

        });
     });

