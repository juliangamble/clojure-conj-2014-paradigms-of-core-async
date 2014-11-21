
var canvas = document.getElementById("canvas");

var colours = ['#FF0000',
             '#00FF00',
             '#0000FF',
             '#00FFFF',
             '#FFFF00',
             '#FF00FF'];

var ctx = document.getElementById("canvas").getContext("2d");

/**
 * Creates a square of random colour ont he canvas at a particular coordinate location (x, y)
 */
function makeCell(x, y) {
  ctx.fillStyle = colours[Math.floor(Math.random() * colours.length)];
  ctx.fillRect(x, y, 10, 10);
}

/**
 * run a complete scan through the grid for one pass and generate all the colours 
 * (given a grid length and breadth)
 */
function makeScene(rows, cols) {
  for (var x = 0; x < cols; x++) {
    for (var y = 0; y < rows; y++) {
      makeCell( (10 * x), (10 *y));
    };
  };
}

var i = 100;

/**
 * Loop through 100 times generating the grid, and pausing for 125 ms each loop
 */
function mainLoop() {
  if (i > 0) {
    i--;
    makeScene( 100, 100);
    console.log("running main loop for: " + i);
    window.setTimeout(mainLoop, 125 );
  }
}

mainLoop();
