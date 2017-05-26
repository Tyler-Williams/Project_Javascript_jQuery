$(document).ready(function() {

  // Create grid
  createGrid(16, squareSize(16));

  //Clear Grid on Button Press
  $('#clear').click(function() {
    //Ask user for how many squares and validate between 0 and 80
    var numSquares = prompt("How many squares per side?");
    if (isValid(numSquares)) {
      clearGrid();
      createGrid(numSquares, squareSize(numSquares));
    } else {

    }

  });
});

function randColor() {
  //Generate color in Decimal
  var decColor = Math.floor(Math.random() * 16777216);
  //Convert to Hex
  var hexColor = '#' + decColor.toString(16);
  console.log("Dec Color: " + decColor + " hex Color " + hexColor);
  return hexColor;
}

function createGrid(sideSize, squareSize) {
  for (i = 0; i < sideSize; i++) {
    for (j = 0; j < sideSize; j++) {
      $('.container').append('<div class="square" style="width:' + squareSize + 'px; height:' + squareSize + 'px;"></div>');
    };
    $('.container').append('<br>');
  };

  //Change color on hover event
  $('.square').mouseover(function() {
    $(this).css("background-color", randColor());
  });
}

function clearGrid() {
  $('.container').html('');
  console.log("Grid cleared");
}

function isValid(numSquares) {
  if (numSquares > 0) {
    if (numSquares <= 64) {
      return true;
    }
  }
  alert("Try again, the amount of squares per side must be between 0 and 64");
  return false;
}

function squareSize(numSquares) {
  var size = Math.floor((960 - 3 * numSquares) / numSquares);
  console.log("Calculated size: " + size);
  return size;
}
