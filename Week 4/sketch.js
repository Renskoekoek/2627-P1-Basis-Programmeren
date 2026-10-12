// moveX is de horizontale afstand tussen de bal en de muis
// moveY is de verticale afstand tussen de bal en de muis
// b.speedX verandert hoe snel de bal naar links of rechts beweegt
// b.speedY verandert hoe snel de bal naar boven of beneden beweegt
// b.x is de horizontale plek van de bal
// b.y is de verticale plek van de bal
// b.speedX *= 0.95 laat de bal langzaam slomer gaan
// b.speedY *= 0.95 laat de bal langzaam slomer gaan
// if (b.y > height) zorgt dat het niet uit het scherm gaat
// b.speedX *= 4 maakt de bal snel bij loslaten

let balls = [];
let followMouse = false;

function setup() {
  createCanvas(800, 600);
  colorMode(HSB);

  resetBalls();
}

function draw() {
  background(0, 0, 10, 0.1);//trail delay
  for (let b of balls) {
    if (followMouse) {
      let moveX = mouseX - b.x;
      let moveY = mouseY - b.y;

      b.speedX += moveX * 0.002; // hoe verder weg de bal hoe harder de pull
      b.speedY += moveY * 0.002; // hoe verder weg de bal hoe harder de pull

    } else {   
      b.speedX *= 0.95; //bal snelheid als muis niet is ingeklikt
      b.speedY *= 0.95; //bal snelheid als muis niet is ingeklikt

      b.speedX += random(-0.3, 0.3); //bewegen wanneer je niets doet
      b.speedY += random(-0.3, 0.3); //bewegen wanneer je niets doet
    }

    // Positie updaten
    b.x += b.speedX;
    b.y += b.speedY;

    // Ballen stuiteren tegen de muren
    if (b.x < 0) {
      b.x = 0;
      b.speedX *= -0.7;
    }
    if (b.x > width) {
      b.x = width;
      b.speedX *= -0.7;
    }
    if (b.y < 0) {
      b.y = 0;
      b.speedY *= -0.7;
    }
    if (b.y > height) {
      b.y = height;
      b.speedY *= -0.7;
    }

    // ballen
    noStroke();
    fill(b.color, 80, 90, 0.8);

    // rondje of vierkant
    if (b.type === "circle") {
      ellipse(b.x, b.y, b.size);
    } else {
      rect(b.x, b.y, b.size, b.size);
    }
  }
}

function mousePressed() {
  followMouse = true; // ballen gaan naar de muis
}

function mouseReleased() {
  followMouse = false; // ballen schieten weg

  //speed boost als loslaten
  for (let b of balls) {
    b.speedX *= 4;
    b.speedY *= 4;
  }
}
function resetBalls() {
  balls = [];

  // Willekeurig aantal ballen (tussen 20 en 50)
  let amount = int(random(20, 50));

  for (let i = 0; i < amount; i++) {
    balls.push({
      x: random(width),
      y: random(height),
      speedX: random(-0.5, 0.5),
      speedY: random(-0.5, 0.5),
      size: random(25, 70),
      color: random(360),
      type: random() < 0.5 ? "circle" : "square" // cirkel of vierkant
    });
  }
}
function keyPressed() {
  if (key === ' ') {
    resetBalls();
  }
}
