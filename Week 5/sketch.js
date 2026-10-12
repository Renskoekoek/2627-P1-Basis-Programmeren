let scherm = 0
let knoppen1 = false
let Bg


let vragen = [{
  vraag: "Welke Dimension komt er naar Minecraft?",
  antwoorden: ["The Sift", "The Underworld", "The Farlands", "The Aether"],
  correcteantwoord: 0
  //sift
},
{
  vraag: "In welke update kwam de mace in het spel?",
  antwoorden: ["Update 1.20", "Update 1.20.5/1.20.8", "Update 1.21", "Update 1.21.11"],
  correcteantwoord: 0
  //1.21
},
{
  vraag: "Hoever kan een redstone gepowerde signaal gaan tot hij op is?",
  antwoorden: ["10 blocken", "12 blocken", "15 blocken", "17 blocken"],
  correcteantwoord: 0
  //15
},
{
  vraag: "Hoeveel ticks van een redstone clock kan een redstone torch hebben tot hij uitgaat?",
  antwoorden: ["4 ticks", "8 ticks", "16 ticks", "60 ticks"],
  correcteantwoord: 0
  //16
},
{
  vraag: "Welke mob kan geen strenght effect krijgen?",
  antwoorden: ["Iron golem", "Enderdragon", "Snow golem", "Wither"],
  correcteantwoord: 0
  //Snow
},
{
  vraag: "Hoeveel EXP geeft de Enderdragon bij de EERSTE kill?",
  antwoorden: ["5000 EXP", "12000 EXP", "25000 EXP", "40000 EXP"],
  correcteantwoord: 0
  //12000
},
{
  vraag: "Welke kan WEL verplaatst worden door een piston?",
  antwoorden: ["Enderchest", "Enchanting table", "Shulker box", "Crying Obsidian"],
  correcteantwoord: 0
  // Shulker
},
{
  vraag: "Wat is de maximale afstand waarop een conduit zijn volledige effect geeft?",
  antwoorden: ["16 blocken", "32 blocken", "48 blocken", "64 blocken"],
  correcteantwoord: 0
  //48
},
{
  vraag: "Hoeveel damage doet een volledig geladen trident met Impaling V tegen een drowned?",
  antwoorden: ["13 damage", "20 damage", "27 damage", "33 damage"],
  correcteantwoord: 0
  // 33
},
]
let huidigevraag = 0


function preload() {
  //Bg = loadImage("Snow mc.jpg");
  //logo = loadImage("Mc logo.png");
  //gras = loadImage("GrassTexture.jpg")
}
function setup() {
  fill('green')
  createCanvas(800, 600);
}

function draw() {
  background(220);
  image(Bg, -420, 0, 1280, 720);
  textSize(20)
  fill("#000")
  text("X" + mouseX, 30, 30)
  text("Y" + mouseY, 30, 60)
  if (scherm == 0) {
    image(logo, 200, 0, 400, 400)
    fill("rgb(247, 250, 250)")
    rect(300, 250, 200, 60, 20)
    fill("#268002")
    textSize(60)
    text("Quiz", 330, 300)
    image(gras, 290, 380, 112, 112)
    image(gras, 394, 380, 112, 112)
    fill("#000000")
    text("Play", 340, 450)
    vraag1()
  }
}

function mousePressed() {
  if (scherm == 0) {
    if (mouseX > 290 && mouseX < 506 && mouseY > 380 && mouseY < 492) {
      scherm = 1
    }
  }
}

function vraag1() {
  if (scherm == 1 && !knoppen1) {
    knoppen1 = true
    antwoord1 = createButton(vragen[0].antwoorden[0])
    antwoord1.position(100, 100)
    antwoord2 = createButton(vragen[0].antwoorden[1])
    antwoord3 = createButton(vragen[0].antwoorden[2])
    antwoord4 = createButton(vragen[0].antwoorden[3])
  }
}
