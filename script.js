/**classes - CardDeck, Card, Player
 * methods needed: create deck of 52 cards 1
 * 13 of each suit, shuffle, deal, player puts in a card, compare one card value with the other, adding to player's score, declaring winner
 * array iteration needs to include color, suite, cardValue (rank)
 * each player will be dealt a random 26 out of 52 cards
 * each round is when one player puts a card down
 * the two cards are evaluated, one is deemed greater than the other,
 * player with higher-value card gets a point.
 * If cards are equal value during a play, zero points
 * Winner is the player with the higher number of ponts after 26 rounds
 * Looked up ASCII / JS card codes, then found Alt-Codes with better instructions**/

// const spades = '\u2660'; // ♠
// const hearts = '\u2665'; // ♥
// const diamonds = '\u2666'; // ♦
// const clubs = '\u2663'; // ♣

// console.log(`The four suits are: ${spades} ${hearts} ${diamonds} ${clubs}`);

class CardDeck {                 //needs arrays & iterations to create and cards - ranks, values, suits 
    constructor() {
        this.deck = []
        this.suit = [
            "Spades ♠", 
            "Hearts ♥", 
            "Clubs ♣",
            "Diamonds ♦"
        ];

        this.rank = [        //use array index as value of cards
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King"
        ];
        }
        createDeck() {
    for (let i=0; i < this.suit.length; i++) {
        for (let j=0; j < this.rank.length; j++) {
            let card = {
                cardName: `${this.rank[j]} of ${this.suit[i]}`,
                value: j+1
            }
            this.deck.push (card);
           
        }
    }
}
/**Googled this one and found info on StackOverflow 
 * *https://stackoverflow.com/questions/73603123/function-for-shuffling-a-deck-of-cards-js
 * Then I figured I should understand this and found some other resources
 * https://docs.vultr.com/javascript/examples/shuffle-deck-of-cards
 * https://www.geeksforgeeks.org/javascript/javascript-program-to-shuffle-deck-of-cards/ **/

shuffleDeck(deck) {             //Fisher Yates Method - not sure how this works
    for (let i = this.deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]; 
    }
}          

//watched Promineo video for more guidance about details

}

/* deck - instantiation of deck inside Game class
 * shuffle deck
 * pass the deck (deal)
 * 2 players: name, hand, score
 * Game Logic: 
 *  - check whether players have cards
 *  - deal the cards
 *  - 26 rounds of: 
 *      - compare two cards
 *      - give 1 point to player with higher value card
 *      - give 0 points if players' cards tie
 *  - declare winner - player with most points
 * 
 */

class Game {
    constructor() {
        this.player1 = {
            name: 'Megan',
            score: 0,
            hand: []
        }
        this.player2 = {
            name: 'Roger',
            score: 0,
            hand: []
    }

}

playWarGame() {
    //instantiate card deck, create the deck, shuffle the deck
    const deck = new CardDeck
    deck.createDeck()     //initially tested without shuffling or dealing to make sure the createDeck method worked.
    deck.shuffleDeck()

    while (deck.deck.length !== 0) {       //while there are still cards to deal
        this.player1.hand.push(deck.deck.shift())  //remove first card each time
        this.player2.hand.push(deck.deck.shift())  //each player gets a card, reducing number of cards in the deck
    }    

    console.log(this.player1.hand);
    console.log(this.player2.hand);

    //Play War - 26 rounds - each player puts down a card

    for (let i=0; i < this.player1.hand.length; i++) {
       
        if (this.player1.hand[i].value > this.player2.hand[i].value) {
            this.player1.score++
             console.log (`
            Player 1 Card: ${this.player1.hand[i].cardName} 
            Player 2 card: ${this.player2.hand[i].cardName}
            Player 1 wins a point!
            Current Score: 
            -------------------------------------------
            Player 1: ${this.player1.score}, Player 2: ${this.player2.score}
            `)


        }else {
            this.player2.score++
             console.log (`
            Player 1 Card: ${this.player1.hand[i].cardName} 
            Player 2 card: ${this.player2.hand[i].cardName}
            Player 2 wins a point!
            Current Score: 
            -------------------------------------------
            Player 1: ${this.player1.score}, Player 2: ${this.player2.score}
            `)
        }

    }

    if (this.player1.score > this.player2.score) {
        console.log(`
        Player 1 wins!
           Final Score:
           Player 1: ${this.player1.score}, Player 2: ${this.player2.score} `)
    } else if  (this.player1.score < this.player2.score) {
        console.log(`
        Player 2 wins!
           Final Score:
           Player 1: ${this.player1.score}, Player 2: ${this.player2.score} `)
    } else {
        console.log("It's a tie!")
        }

  }

}
let game = new Game
game.playWarGame( )
