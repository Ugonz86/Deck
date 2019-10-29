var cardSuits = ["hearts", "diamonds", "spades", "clubs"];
var cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "queen", "king"];

$(document).ready(function() {

    cardSuits.forEach(function(cardSuit) {
      cards.forEach(function(card) {
        $("#output").append("<li>" + card + " of " + cardSuit + "</li>")
      });
    });
  });
