$(document).ready(function(){
  var deck = new Array();
  var suits = ["spades", "diamonds", "clubs", "hearts"];
  var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  suits.forEach(function(suit){
    deck.forEach(function(suit){
      deck.push(values);
    });
  });
  console.log(deck);
});
