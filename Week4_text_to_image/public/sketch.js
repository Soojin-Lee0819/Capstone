let strokeIndex = 0;
let index = 0;
let rainbow;
let bicycle;
let prevx, prevy;

function setup() {
  createCanvas(250, 250);
  newRainbow();
  newBicycle();
}

function newRainbow() {
  loadJSON('/rainbow', gotRainbow);
}
  function newBicycle() {
    loadJSON('/bicycle', gotBicycle);
  }

function draw() {

  if (rainbow) {
    let x = rainbow[strokeIndex][0][index];
    let y = rainbow[strokeIndex][1][index];
    stroke(0);
    strokeWeight(3);
    if (prevx !== undefined) {
      line(prevx, prevy, x, y);
    }
    index++;
    if (index === rainbow[strokeIndex][0].length) {
      strokeIndex++;
      prevx = undefined;
      prevy = undefined;
      index = 0;
      if (strokeIndex === rainbow.length) {
        console.log(strokeIndex);
        rainbow = undefined;
        strokeIndex = 0;
        setTimeout(newBicycle, 100);
      }
    } else {
      prevx = x;
      prevy = y;
    }
  }
    
  else if (bicycle) {
    let x = bicycle[strokeIndex][0][index];
    let y = bicycle[strokeIndex][1][index];
    stroke(0);
    strokeWeight(3);
    if (prevx !== undefined) {
      line(prevx, prevy, x, y);
    }
    index++;
    if (index === bicycle[strokeIndex][0].length) {
      strokeIndex++;
      prevx = undefined;
      prevy = undefined;
      index = 0;
      if (strokeIndex === bicycle.length) {
        console.log(strokeIndex);
        bicycle = undefined;
        strokeIndex = 0;
        setTimeout(newRainbow, 100);
      }
    } else {
      prevx = x;
      prevy = y;
    }
  }

}

function gotRainbow(data) {
  background(250);
  rainbow = data.drawing;
  console.log(rainbow);
}

  function gotBicycle(data) {
    background(250);
    bicycle = data.drawing;
    console.log(bicycle);
  }