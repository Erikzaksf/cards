$(document).ready(function(){
  var cards =['ace of', '2 of', '3 of', '4 of', '5 of', '6 of', '7 of', '8 of', '9 of', '10 of', 'jack of', 'queen of', 'king of']
  var clubs = [];
  var spades = [];
  var hearts = [];
  var diamonds = [];
  var arrayOfCards2 = [];
   var arrayOfCards = cards.forEach(function(card) {
     clubs.push(card + ' clubs');
      spades.push(card + ' diamonds');
      hearts.push(card + ' hearts');
      diamonds.push(card + ' spades');
  });

  arrayOfCards2.push(clubs, spades, hearts, diamonds);

  console.log(arrayOfCards2);

  console.log('here: ',arrayOfCards);
  console.log(clubs);
  console.log(diamonds);
  console.log(hearts);
  console.log(spades);
})
