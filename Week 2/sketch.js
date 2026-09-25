let zon = -100
let maan = -100
let stipmaan1 = -104
let stipmaan2 = -110
let stipmaan3 = -84
let truck = -100
let timer = 0
let truck1 = -100
let auto  =  -100
let statusstoplicht = "groen"
let auto2 = -100
let backGroundColor = "#BAECFF"
let zonIsEr = true;
let wolk1 = -100
let wolk2 = -500
let wolk3 = -800
let wolk4 = -300
let wolk5 = -1100

function keyPressed() {
  if (key == "Enter"){
    console.log ("keypressed")
    if (statusstoplicht == "groen"){
      statusstoplicht = "oranje" 
      return

    }
    if (statusstoplicht == "oranje"){
      statusstoplicht = "rood"
      return
    }
    if (statusstoplicht == "rood"){
      statusstoplicht = "groen"
      returns
    }
  }
}


function setup() {
  createCanvas(700, 600);
}

function draw() {
  background(220);
  
  
  //lucht//
  strokeWeight(0)
  fill(backGroundColor)
  rect(0, 0, 1000, 380)
  
  //timer//
  fill ("#000000")
  textSize (0)
  timer = timer + 1
  if (timer > 600 )
    {
      timer = 0
    }
    
    
    //weg//
    fill("#857E7E")
    rect(0, 420, 1000, 140)
    fill("#F5F5F5")
    rect(10, 490, 60, 10)
    rect(110, 490, 60, 10)
    rect(210, 490, 60, 10)
    rect(310, 490, 60, 10)
    rect(410, 490, 60, 10)
    rect(510, 490, 60, 10)
    rect(610, 490, 60, 10)
    rect(710, 490, 60, 10)
    rect(810, 490, 60, 10)
    rect(910, 490, 60, 10)
    
    //gras//
    fill("#769440")
    rect(0, 380, 1000, 40)
    rect(0, 560, 1000)
    
    //bergen//
    fill("#736363")
    strokeWeight(0)
    triangle(200, 150, 100, 380, 300, 380)
    fill("#B8B2B2")
    triangle(300, 240, 420, 380, 200, 380)
    fill("#5c5959")
    triangle(500, 130, 300, 380, 800, 380)
    
    //boom achter//
    fill ("#512800")
    rect (60,300,20,100)
    fill ("#035400")
    circle (70,280,100)
    
    //stoplicht//
  fill("#bebebe")
  rect(600, 250, 35, 90)
  rect(610, 340, 15, 60)
  fill ("#083000")
  circle(618, 325, 25)
  fill ("#926208")
  circle(618, 295, 25)
  fill ("#4a0000")
  circle(618, 267, 25) 

  if (statusstoplicht == "groen")
  {
    fill("#98e008")
    circle(618, 325, 25)
  }
  if (statusstoplicht =="oranje")
  {
    fill("#ffaa00")
    circle(618, 295, 25)
  }
  if (statusstoplicht == "rood")
  {
    fill("#FF0000")
    circle(618, 267, 25)
  }
      //stoplicht automatic//
  //if (timer < 200)
  //{
    //fill("#98e008")
    //circle(618, 325, 25)
    //tatusstoplicht = "groen"
  //}
  //if (timer > 200 && timer < 300)
  //{
    //fill("#ffaa00")
    //circle(618, 295, 25)
    //statusstoplicht = "oranje"
  //}
  //if (timer > 300)
  //{
    //fill("#FF0000")
    //circle(618, 267, 25)
    //statusstoplicht = "rood"
  //}

  //zon//
 if(zonIsEr){
fill("#FFC13B")
  circle(zon, 70, 100)
  fill("#FFAC40")
  circle(zon, 70, 80)
  fill("#FF9B14")
  circle(zon, 70, 60)
  zon = zon + 1
  if (zon > 1000) {
    zon = -100
    zonIsEr = false
    backGroundColor ="#1e363d"
  }
 }
  //zon//
  

  //maan//
 if(!zonIsEr){
  fill("#C9C9C9")
  circle(maan, 50, 70)
  maan = maan + 1
  if (maan > 1000) {
    maan = -100
    backGroundColor ="#BAECFF"
    zonIsEr = true;
  }
  fill("#737373")
  circle(stipmaan1, 70, 20)
  stipmaan1 = stipmaan1 + 1
  if (stipmaan1 > 1000) {
    stipmaan1 = -100
  }
  circle(stipmaan2, 40, 30)
  stipmaan2 = stipmaan2 + 1
  if (stipmaan2 > 1000) {
    stipmaan2 = -100
  }
  circle(stipmaan3, 45, 25)
  stipmaan3 = stipmaan3 + 1
  if (stipmaan3 > 1000) 
  {
    stipmaan3 = -100
  }

 }
  //truck//
  
  fill ("#0092FF")
  rect (truck1,370,60,100)
  rect (truck1 -70 ,440,100,30)
  fill ("#D5DEE6")
  rect (truck1 + 30,380,30,40)
  fill ("#000000")
  circle (truck1 + 40,475,30)
  circle (truck1 - 40,475,30)
  circle (truck1 - 200,475,30)
  circle (truck1 - 150,475,30)
  fill ("#4d4d4d")
  rect (truck1 - 220,360,200,80)
  rect (truck1 - 220,440,100,20)

  if (statusstoplicht=="groen")
  truck1 = truck1 + 3
  if (statusstoplicht=="oranje")
  truck1 = truck1 + 2
  if (statusstoplicht=="rood")
  {
    if (truck1 < 450 || truck1 > 500)
      truck1 = truck1 + 2
  }
  if (truck1 > 1000)
  {
    truck1 = -100
  }

  //auto//
  fill ("#909090")
  rect (auto,450,120,40)
  rect (auto - 30,490,180,40)
  fill ("#D5DEE6")
  rect (auto + 10,460,40,25)
  rect (auto + 80,460,40,25)
  fill ("#000000")
  circle (auto + 10,540,30)
  circle (auto + 130,540,30)
  fill ("#971818")
  rect (auto -30,490,15,20)
  fill ("#d9c91f")
  rect (auto + 135,490,15,20)
 
  
  if (statusstoplicht=="groen")
  auto = auto + 4
  if (statusstoplicht=="oranje")
  auto = auto + 3
  if (statusstoplicht=="rood")
  {
    if (auto < 450 || auto > 500 )
    auto = auto + 3
  }

  if (auto > 1500)
  {
    auto = -100
  }

  //auto 2//
  fill ("#db4242")
  rect (auto2 - 300,450,120,40)
  rect (auto2 - 320,490,180,40)
  fill ("#D5DEE6")
  rect (auto2 - 290,460,40,25)
  rect (auto2 - 220,460,40,25)
  fill ("#000000")
  circle (auto2 - 290,540,30)
  circle (auto2 - 170,540,30)
  fill ("#971818")
  rect (auto2 -320,490,15,20)
  fill ("#d9c91f")
  rect (auto2 - 155,490,15,20)
  if (statusstoplicht=="groen")
  auto2 = auto2 + 4
  if (statusstoplicht=="oranje")
  auto2 = auto2 + 3
  if (statusstoplicht=="rood")
  {
    if (auto2 < 450 || auto2 > 500 )
    auto2 = auto2 + 3
  }


  if (auto2 > 1500)
  {
    auto2 = -150
  }

  //wolken//
  fill ("#ffffff")
  circle (wolk1 + 20,100,50)
  circle (wolk1 + 40,88,50)
  circle (wolk1 + 55,105,45)
  circle (wolk1 + 70,94,56)
  wolk1 = wolk1 +2
  if (wolk1 > 1200)
  {
    wolk1 = -100
  }
  circle (wolk2 + 50,120,50)
  circle (wolk2 + 70,108,50)
  circle (wolk2 + 85,125,45)
  circle (wolk2 + 100,114,56)
  wolk2 = wolk2 +2
  if (wolk2 > 1200)
  {
    wolk2 = -150
  }
  circle (wolk3 + 20,70,50)
  circle (wolk3 + 40,58,50)
  circle (wolk3 + 55,75,45)
  circle (wolk3 + 70,64,56)
  wolk3 = wolk3 +2
  if (wolk3 > 1200)
  {
    wolk3 = -100
  }
  circle (wolk4 + 80,100,50)
  circle (wolk4 + 100,88,50)
  circle (wolk4 + 115,105,45)
  circle (wolk4 + 130,94,56)
  wolk4 = wolk4 +2
  if (wolk4 > 1200)
  {
    wolk4 = -100
  }
  circle (wolk5 + 20,50,50)
  circle (wolk5 + 40,58,50)
  circle (wolk5 + 55,75,45)
  circle (wolk5 + 70,64,56)
  wolk5 = wolk5 +2
  if (wolk5 > 1200)
  {
    wolk5 = -100
  }

  //boom voor//
  fill ("#512800")
  rect (570,520,20,80)
  fill ("#035400")
  circle (580,500,100)
  
  
  


}
