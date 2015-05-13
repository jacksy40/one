$('#appetizer').on('click', function(e){
  e.preventDefault();
  $('.appetizer-container').fadeIn();
  $('.rice-container').hide();
  $('.soups-container').hide();
  $('.dumplings-container').hide();
  $('.lo-mein-container').hide();
  $('.chicken-container').hide();
  $('.beef-container').hide();
  $('.pork-container').hide();
  $('.seafood-container').hide();
  $('.drinks-container').hide();
});

$('#rice').on('click', function(e){
  e.preventDefault();
  $('.appetizer-container').hide();
  $('.rice-container').fadeIn();
  $('.soups-container').hide();
  $('.dumplings-container').hide();
  $('.lo-mein-container').hide();
  $('.chicken-container').hide();
  $('.beef-container').hide();
  $('.pork-container').hide();
  $('.seafood-container').hide();
  $('.drinks-container').hide();
});

$('#soups').on('click', function(e){
  e.preventDefault();
  $('.appetizer-container').hide();
  $('.rice-container').hide();
  $('.soups-container').fadeIn();
  $('.dumplings-container').hide();
  $('.lo-mein-container').hide();
  $('.chicken-container').hide();
  $('.beef-container').hide();
  $('.pork-container').hide();
  $('.seafood-container').hide();
  $('.drinks-container').hide();
});

$('#dumplings').on('click', function(e){
  e.preventDefault();
  $('.appetizer-container').hide();
  $('.rice-container').hide();
  $('.soups-container').hide();
  $('.dumplings-container').fadeIn();
  $('.lo-mein-container').hide();
  $('.chicken-container').hide();
  $('.beef-container').hide();
  $('.pork-container').hide();
  $('.seafood-container').hide();
  $('.drinks-container').hide();
});

$('#lo-mein').on('click', function(e){
  e.preventDefault();
  $('.appetizer-container').hide();
  $('.rice-container').hide();
  $('.soups-container').hide();
  $('.dumplings-container').hide();
  $('.lo-mein-container').fadeIn();
  $('.chicken-container').hide();
  $('.beef-container').hide();
  $('.pork-container').hide();
  $('.seafood-container').hide();
  $('.drinks-container').hide();
});

$('#chicken').on('click', function(e){
  e.preventDefault();
  $('.appetizer-container').hide();
  $('.rice-container').hide();
  $('.soups-container').hide();
  $('.dumplings-container').hide();
  $('.lo-mein-container').hide();
  $('.chicken-container').fadeIn();
  $('.beef-container').hide();
  $('.pork-container').hide();
  $('.seafood-container').hide();
  $('.drinks-container').hide();
});

$('#beef').on('click', function(e){
  e.preventDefault();
  $('.appetizer-container').hide();
  $('.rice-container').hide();
  $('.soups-container').hide();
  $('.dumplings-container').hide();
  $('.lo-mein-container').hide();
  $('.chicken-container').hide();
  $('.beef-container').fadeIn();
  $('.pork-container').hide();
  $('.seafood-container').hide();
  $('.drinks-container').hide();
});

$('#pork').on('click', function(e){
  e.preventDefault();
  $('.appetizer-container').hide();
  $('.rice-container').hide();
  $('.soups-container').hide();
  $('.dumplings-container').hide();
  $('.lo-mein-container').hide();
  $('.chicken-container').hide();
  $('.beef-container').hide();
  $('.pork-container').fadeIn();
  $('.seafood-container').hide();
  $('.drinks-container').hide();
});

$('#seafood').on('click', function(e){
  e.preventDefault();
  $('.appetizer-container').hide();
  $('.rice-container').hide();
  $('.soups-container').hide();
  $('.dumplings-container').hide();
  $('.lo-mein-container').hide();
  $('.chicken-container').hide();
  $('.beef-container').hide();
  $('.pork-container').hide();
  $('.seafood-container').fadeIn();
  $('.drinks-container').hide();
});

$('#drinks').on('click', function(e){
  e.preventDefault();
  $('.appetizer-container').hide();
  $('.rice-container').hide();
  $('.soups-container').hide();
  $('.dumplings-container').hide();
  $('.lo-mein-container').hide();
  $('.chicken-container').hide();
  $('.beef-container').hide();
  $('.pork-container').hide();
  $('.seafood-container').hide();
  $('.drinks-container').fadeIn();
});

