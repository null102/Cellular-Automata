
let columns, rows, generation;

let cells = [];

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);

  background(0);
  noStroke();


  columns = floor(windowWidth);
  rows = floor(windowHeight);

  reset();
}

function reset() {

  for (let i = 0; i < columns; i++) {

    cells[i] = floor(random(2));
  }

  generation = 0;
}


function draw() {

  for (let i = 0; i < columns; i++) {

    let cell = cells[i];

    fill(cell * 255);

    rect(i, generation, 1, 1);
  }

  generation++;

  if (generation < rows) {

    let newcells = [];

    for (let i = 0; i < columns; i++) {

      let left = cells[i - 1];
      let center = cells[i];
      let right = cells[i + 1];

      newcells[i] = rule(left, center, right);
    }

    cells = newcells;
  } else {

    reset();
  }
}

function rule(left, center, right) {

  if (left == undefined) {

    return center;
  } else if (right == undefined) {

    return center;
  } else if (left == 1 && center == 1 && right == 1) {
    return 0;
  } else if (left == 1 && center == 1 && right == 0) {
    return 1;
  } else if (left == 1 && center == 0 && right == 1) {
    return 0;
  } else if (left == 1 && center == 0 && right == 0) {
    return 1;
  } else if (left == 0 && center == 1 && right == 1) {
    return 1;
  } else if (left == 0 && center == 1 && right == 0) {
    return 0;
  } else if (left == 0 && center == 0 && right == 1) {
    return 1;
  } else if (left == 0 && center == 0 && right == 0) {
    return 0;
  }
}
