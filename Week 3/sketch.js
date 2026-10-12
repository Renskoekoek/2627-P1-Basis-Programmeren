let vak1 = 0
let vak2 = 0
let vak3 = 0
let vak4 = 0
let vak5 = 0
let vak6 = 0
let vak7 = 0
let vak8 = 0
let vak9 = 0
let player = 1
let check = 0
let confettiPieces = []
let gameOver = false;
let tie = false



function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220)
  //background//
  for (let y = 0; y < innerHeight; y++) {
    let c = lerpColor(
      color("#ff0000"),
      color("#005eff"),
      y / height
    );

    stroke(c);
    line(0, y, innerWidth, y)
  }
  //speelveld//
  fill("#000000")
  square(100, 100, 400, 20)
  fill("#b8b6b6")
  square(133, 133, 100, 20)
  square(133, 253, 100, 20)
  square(133, 373, 100, 20)
  square(253, 133, 100, 20)
  square(373, 133, 100, 20)
  square(253, 253, 100, 20)
  square(253, 373, 100, 20)
  square(373, 253, 100, 20)
  square(373, 373, 100, 20)
  textSize(20)
  //aan de beurt//
  fill("#828282")
  rect(240, 40, 120, 30)
  if (player == 1) {
    fill("#d52121")
    textSize(20)
    text("player1", 260, 60)
  }
  else if (player == 2) {
    fill("#0b07ff")
    textSize(20)
    text("player2", 260, 60)
  }
  //vak1//
  if (vak1 == 1) {
    fill("#d52121")
    square(133, 133, 100, 20)
  }
  else if (vak1 == 2) {
    fill("#0b07ff")
    square(133, 133, 100, 20)
  }
  //vak2//
  if (vak2 == 1) {
    fill("#d52121")
    square(133, 253, 100, 20)
  }
  else if (vak2 == 2) {
    fill("#0b07ff")
    square(133, 253, 100, 20)
  }
  //vak3//
  if (vak3 == 1) {
    fill("#d52121")
    square(133, 373, 100, 20)
  }
  else if (vak3 == 2) {
    fill("#0b07ff")
    square(133, 373, 100, 20)
  }
  //vak4//
  if (vak4 == 1) {
    fill("#d52121")
    square(253, 133, 100, 20)
  }
  else if (vak4 == 2) {
    fill("#0b07ff")
    square(253, 133, 100, 20)
  }
  //vak5//
  if (vak5 == 1) {
    fill("#d52121")
    square(253, 253, 100, 20)
  }
  else if (vak5 == 2) {
    fill("#0b07ff")
    square(253, 253, 100, 20)
  }
  //vak6//
  if (vak6 == 1) {
    fill("#d52121")
    square(253, 373, 100, 20)
  }
  else if (vak6 == 2) {
    fill("#0b07ff")
    square(253, 373, 100, 20)
  }
  //vak7//
  if (vak7 == 1) {
    fill("#d52121")
    square(373, 133, 100, 20)
  }
  else if (vak7 == 2) {
    fill("#0b07ff")
    square(373, 133, 100, 20)
  }
  //vak8//
  if (vak8 == 1) {
    fill("#d52121")
    square(373, 253, 100, 20)
  }
  else if (vak8 == 2) {
    fill("#0b07ff")
    square(373, 253, 100, 20)
  }
  //vak9//
  if (vak9 == 1) {
    fill("#d52121")
    square(373, 373, 100, 20)
  }
  else if (vak9 == 2) {
    fill("#0b07ff")
    square(373, 373, 100, 20)
  }
  player1 = "#d52121"
  player2 = "#0b07ff"




  win()
  showResetButton()
}

function showResetButton() {
  if (gameOver == true) {
    fill("#5a5757")
    rect(200, 540, 180, 50);
    fill("#cfcfcf")
    textSize(25)
    text("Reset Game", 220, 570)
  }
  if (tie == true) {
    fill("#5a5757")
    rect(200, 540, 180, 50);
    fill("#cfcfcf")
    textSize(25)
    text("Reset Game", 220, 570)
  }
}

function mouseClicked() {

  if (gameOver == true) {
    if (mouseX > 220 && mouseX < 400) {
      if (mouseY > 540 && mouseY < 590) {

        GameReset();
      }
    }
    return;
  }
  if (tie == true) {
    if (mouseX > 220 && mouseX < 400) {
      if (mouseY > 540 && mouseY < 590) {

        GameReset();
      }
    }
    return;
  }


  if (mouseX > 133 && mouseX < 233) {
    if (mouseY > 133 && mouseY < 233) {
      if (vak1 == 0) {
        vak1 = player
        console.log("vak1")
        check = 1
      }
    }
  }
  if (mouseX > 133 && mouseX < 233) {
    if (mouseY > 253 && mouseY < 353) {
      if (vak2 == 0) {
        vak2 = player
        console.log("vak2")
        check = 1
      }
    }
  }
  if (mouseX > 133 && mouseX < 233) {
    if (mouseY > 373 && mouseY < 473) {
      if (vak3 == 0) {
        vak3 = player
        console.log("vak3")
        check = 1
      }
    }
  }
  if (mouseX > 253 && mouseX < 353) {
    if (mouseY > 133 && mouseY < 233) {
      if (vak4 == 0) {
        vak4 = player
        console.log("vak4")
        check = 1
      }
    }
  }
  if (mouseX > 253 && mouseX < 353) {
    if (mouseY > 253 && mouseY < 353) {
      if (vak5 == 0) {
        vak5 = player
        console.log("vak5")
        check = 1
      }
    }
  }
  if (mouseX > 253 && mouseX < 353) {
    if (mouseY > 373 && mouseY < 473) {
      if (vak6 == 0) {
        vak6 = player
        console.log("vak6")
        check = 1
      }
    }
  }
  if (mouseX > 373 && mouseX < 473) {
    if (mouseY > 133 && mouseY < 233) {
      if (vak7 == 0) {
        vak7 = player
        console.log("vak7")
        check = 1
      }
    }
  }
  if (mouseX > 373 && mouseX < 473) {
    if (mouseY > 253 && mouseY < 353) {
      if (vak8 == 0) {
        vak8 = player
        console.log("vak8")
        check = 1
      }
    }
  }
  if (mouseX > 373 && mouseX < 473) {
    if (mouseY > 373 && mouseY < 473) {
      if (vak9 == 0) {
        vak9 = player
        console.log("vak9")
        check = 1
      }
    }
  }

  playerchange();
}

function playerchange() {
  if (check == 1) {
    // 1 = player 1
    // 2 = player 2
    if (player == 1) {
      player = 2
    }
    else if (player == 2) {
      player = 1

    }
    check = 0
  }
}

function win() {
  if (vak1 == 1 && vak2 == 1 && vak3 == 1) {
    fill("#938f8f")
    textSize(60)
    text("winner player1", 100, 300)
    gameOver = true
  }
  if (vak4 == 1 && vak5 == 1 && vak6 == 1) {
    fill("#938f8f")
    textSize(60)
    text("winner player1", 100, 300)
    gameOver = true

  }
  if (vak7 == 1 && vak8 == 1 && vak9 == 1) {
    fill("#938f8f")
    textSize(60)
    text("winner player1", 100, 300)
    gameOver = true
  }
  if (vak1 == 1 && vak4 == 1 && vak7 == 1) {
    fill("#938f8f")
    textSize(60)
    text("winner player1", 100, 300)
    gameOver = true
  }
  if (vak2 == 1 && vak5 == 1 && vak8 == 1) {
    fill("#938f8f")
    textSize(60)
    text("winner player1", 100, 300)
    gameOver = true
  }
  if (vak3 == 1 && vak6 == 1 && vak9 == 1) {
    fill("#938f8f")
    textSize(60)
    text("winner player1", 100, 300)
    gameOver = true
  }
  if (vak1 == 1 && vak5 == 1 && vak9 == 1) {
    fill("#938f8f")
    textSize(60)
    text("winner player1", 100, 300)
    gameOver = true
  }
  if (vak3 == 1 && vak5 == 1 && vak7 == 1) {
    fill("#938f8f")
    textSize(60)
    text("winner player1", 100, 300)
    gameOver = true
  }
  if (vak1 == 2 && vak2 == 2 && vak3 == 2) {
    fill("#938f8f")
    textSize(60)
    text("winner player2", 100, 300)
    gameOver = true
  }
  if (vak4 == 2 && vak5 == 2 && vak6 == 2) {
    fill("#938f8f")
    textSize(60)
    text("winner player2", 100, 300)
    gameOver = true
  }
  if (vak7 == 2 && vak8 == 2 && vak9 == 2) {
    fill("#938f8f")
    textSize(60)
    text("winner player2", 100, 300)
    gameOver = true
  }
  if (vak1 == 2 && vak4 == 2 && vak7 == 2) {
    fill("#938f8f")
    textSize(60)
    text("winner player2", 100, 300)
    gameOver = true
  }
  if (vak2 == 2 && vak5 == 2 && vak8 == 2) {
    fill("#938f8f")
    textSize(60)
    text("winner player2", 100, 300)
    gameOver = true
  }
  if (vak3 == 2 && vak6 == 2 && vak9 == 2) {
    fill("#938f8f")
    textSize(60)
    text("winner player2", 100, 300)
    gameOver = true
  }
  if (vak1 == 2 && vak5 == 2 && vak9 == 2) {
    fill("#938f8f")
    textSize(60)
    text("winner player2", 100, 300)
    gameOver = true
  }
  if (vak3 == 2 && vak5 == 2 && vak7 == 2) {
    fill("#938f8f")
    textSize(60)
    text("winner player2", 100, 300)
    gameOver = true
  }

  if (vak1 != 0 && vak2 != 0 && vak3 != 0 && vak4 != 0 && vak5 != 0 && vak6 != 0 && vak7 != 0 && vak8 != 0 && vak9 != 0 && player1 != true && player2 != true) {
    fill("#938f8f")
    textSize(60)
    text("tie", 280, 300)
    tie = true
  }

}

function GameReset() {
  vak1 = 0
  vak2 = 0
  vak3 = 0
  vak4 = 0
  vak5 = 0
  vak6 = 0
  vak7 = 0
  vak8 = 0
  vak9 = 0
  player = 1
  check = 0
  gameOver = false;
  tie = false
}


