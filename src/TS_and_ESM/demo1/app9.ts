let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // return function () {
        //     let pickedCard = Math.floor(Math.random() * 52);
        //     let pickedSuit = Math.floor(pickedCard / 13);

        //     // Error: reading this.suits field will throw error, 
        //     // because every function in JavaScript has its own `this` value.
        //     return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        // };
    }
}

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

export {};