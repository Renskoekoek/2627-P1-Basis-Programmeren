function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  fill("black")
  text("1. Rens koekoek", 10, 10)
  text("2.", 10, 20)

  //vlag//
  strokeWeight(0)
  fill("red")
  rect(20, 25, 80, 15)
  fill("white")
  rect(20, 40, 80, 15)
  fill("blue")
  rect(20, 55, 80, 15);

  //schaakbord//
  strokeWeight(2)
  fill("black")
  text("3.", 10, 90)
  fill("white")
  square(20, 100, 60)
  fill("black")
  square(20, 100, 20)
  square(40, 120, 20)
  square(20, 140, 20)
  square(60, 100, 20)
  square(60, 140, 20)

  //huisje//
  text("4.", 10, 180)
  noFill()
  triangle(50, 180, 15, 220, 85, 220)
  rect(20, 220, 60)

  //stoplicht//
  strokeWeight(0)
  fill("black")
  text("5", 120, 10)
  fill("grey")
  rect(140, 20, 30, 80)
  rect(147, 100, 15, 30)
  fill("red")
  circle(155, 35, 20)
  fill("orange")
  circle(155, 60, 20)
  fill("lime")
  circle(155, 85, 20)

  //dobblesteen//
  strokeWeight(3)
  fill("black")
  text("6.", 120, 150)
  fill("white")
  square(140, 160, 60, 10)
  fill("black")
  circle(153, 173, 13)
  circle(188, 208, 13)
  circle(170, 190, 13)


  //mario//
  text ("7. Mario",250,10)
  strokeWeight(0)
  fill("#E33434")
  rect(280, 20, 50, 10)
  rect(270, 30, 80, 10)
  fill("#6B3D21")
  rect(270, 40, 30, 10)
  square(260,50,10,)
  square (260,60,10)
  square (260,70,10)
  square (270,70,10)
  square (280,60,10)
  square (290,60,10)
  square (280,50,10)
  square (310,70,10)
  square (320,70,10)
  square (330,70,10)
  square (340,70,10)
  square (320,60,10)
  rect (260,170,30,10)
  rect (270,160,20,10)
  rect (320,170,30,10)
  rect (320,160,20,10)
  fill ("#D9B486")
  square (300,40,10)
  rect (290,50,20,10)
  rect (300,60,20,10)
  rect (280,70,30,10)
  square (270,60,10)
  square (270,50,10)
  rect (280,80,50,10)
  square (320,40,10)
  rect (320,50,30,10)
  rect (330,60,30,10)
  rect (250,120,20,10)
  rect (250,130,30,10)
  rect (250,140,20,10)
  rect (340,120,20,10)
  rect (330,130,30,10)
  rect (340,140,20,10)
  fill ("#E33434")
  rect (270,90,20,10)
  rect (260,100,30,10)
  rect (250,110,40,10)
  square (270,120,10)
  square  (300,90,10)
  square (300,100,10)
  rect (320,90,20,10)
  rect (320,100,30,10)
  rect (320,110,40,10)
  square (330,120,10)
  fill ("#2341B8")
  square (290,90,10)
  square (290,100,10)
  square (310,90,10)
  square (310,100,10)
  square (300,110,10)
  rect (280,120,50,10)
  rect (280,130,50,10)
  rect (270,140,70,10)
  rect (270,150,30,10)
  rect (310,150,30,10)
  fill ("#EDE42D")
  square (290,110,10)
  square (310,110,10)
  fill ("black")
  square (310,40,10)
  square (310,50,10)

  //pixel art//
  fill ("#000000")//kleur//
  text ("8. Hollow Knight",180,270)//tekst//
  rect (200,280,20,10)//vorm en coordinaten//
  square (190,290,10)//vorm en coordinaten//
  square (180,300,10)//vorm en coordinaten//
  rect (170,310,10,40)//vorm en coordinaten//
  square (180,350,10)//vorm en coordinaten//
  square (190,360,10)//vorm en coordinaten//
  rect (200,370,10,60)//vorm en coordinaten//
  square  (210,430,10)//vorm en coordinaten//
  square (220,440,10)//vorm en coordinaten//
  rect (230,450,70,10)//vorm en coordinaten//
  square (300,440,10)//vorm en coordinaten//
  square (310,430,10)//vorm en coordinaten//
  square (220,290,10)//vorm en coordinaten//
  square (210,300,10)//vorm en coordinaten//
  rect (200,310,10,30)//vorm en coordinaten//
  rect (210,340,20,10)//vorm en coordinaten//
  rect (230,350,70,10)//vorm en coordinaten//
  rect (300,340,20,10)//vorm en coordinaten//
  rect (320,310,10,30)//vorm en coordinaten//
  square (310,300,10)//vorm en coordinaten//
  square (300,290,10)//vorm en coordinaten//
  rect (310,280,20,10)//vorm en coordinaten//
  square (340,300,10)//vorm en coordinaten//
  rect (350,310,10,40)//vorm en coordinaten//
  square (340,350,10)//vorm en coordinaten//
  square (330,360,10)//vorm en coordinaten//
  rect (320,370,10,60)//vorm en coordinaten//
  rect (220,460,10,30)//vorm en coordinaten//
  rect (210,490,10,50)//vorm en coordinaten//
  square (220,540,10)
  rect (230,530,30,10)
  rect (240,540,20,10)
  square (250,550,10)
  square (270,560,10)
  rect (250,520,30,10)
  rect (270,530,30,10)
  rect (270,540,20,10)
  rect (270,550,20,10)
  square (300,540,10)
  rect (300,460,10,30)
  rect (310,490,10,50)
  rect (240,460,10,20)
  rect (250,480,10,20)
  rect (260,500,10,20)
  rect (230,400,20,30)
  rect (280,400,20,30)
  square (330,290,10)
  fill ("#A19D9D")
  rect (230,460,10,20)
  rect (220,490,10,20)
  rect (280,460,20,10)
  square (290,480,10)
  square (300,490,10)
  square (280,500,10)
  fill ("#8C8C8C")
  square (280,480,10)
  rect (280,470,20,10)
  rect (290,500,20,10)
  rect (290,510,20,10)
  rect (280,520,30,10)
  square (300,530,10)
  rect (260,470,10,30)
  rect (270,490,10,20)
  rect (230,480,10,30)
  rect (240,500,10,30)
  rect (220,520,20,10)
  square (220,510,10)
  square (220,530,10)
  square (250,510,10)
  rect (230,440,70,10)
  square (220,430,10)
  square (210,420,10)
  square (310,420,10)
  square (300,430,10)
  square (320,360,10)
  square (330,350,10)
  square (340,340,10)
  fill ("#474747")
  rect (210,450,20,10)
  rect (200,460,20,10)
  square (210,470,10)
  square (200,440,10)
  square (190,430,10)
  square (200,360,10)
  square (190,350,10)
  square (180,340,10)
  rect (250,460,30,10)
  square (250,470,10)
  square (270,470,10)
  square (270,480,10)
  rect (280,490,20,10)
  rect (270,510,20,10)
  rect (240,480,10,20)
  square (250,500,10)
  square (230,510,10)










  











  


}