// Set card height
document.addEventListener("DOMContentLoaded", function() {
    var cardRows = document.querySelectorAll('.row');
    cardRows.forEach(function(row) {
      var cards = row.querySelectorAll('.card');
      var maxHeight = 0;
      cards.forEach(function(card) {
        var cardHeight = card.offsetHeight;
        if (cardHeight > maxHeight) {
          maxHeight = cardHeight;
        }
      });
      cards.forEach(function(card) {
        card.style.height = maxHeight + 'px';
      });
    });
  });


// Card image styling
var images = document.querySelectorAll('.card img');
var maxImgHeight = 0;

images.forEach(function(img) {
    var imgHeight = img.offsetHeight;
    if (imgHeight > maxImgHeight) {
        maxImgHeight = imgHeight;
    }
});

maxImgHeight = Math.min(maxImgHeight, 400);

images.forEach(function(img) {
    img.style.height = maxImgHeight + 'px';
    img.style.overflow = 'hidden';
});