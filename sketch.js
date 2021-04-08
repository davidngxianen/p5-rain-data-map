var samplevaluelow = 2
var samplevaluehigh = 10

let singaporemap;

function preload() {
  singaporemap = loadModel('assets/singaporemap.obj', true);
}

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(200);
  scenesetup();
  scale(5.0); // Scaled to make model fit into canvas
  orbitControl(8,2,2);
  rotateX(-0.6)
  noStroke();
  ambientMaterial(250); // For effect
  drawPlotBoxes();
  model(singaporemap);
}

function scenesetup() {
  //camera(0, -1300, 1000, 0, 0, 0, 0, 1, 0);
  ambientLight(128, 128, 128);
  directionalLight(60, 60, 60, 0, 1, -1)
  directionalLight(100, 100, 100, 200, 200, -1);
} // Camera setup

let plotbox = {
  
  S77: function() { //Alexandra Road
    push();
    translate(-15, (S77_Value/2)*-1 ,20);
    normalMaterial();
    box(5, S77_Value, 5);
    pop();
  },
  
  S109: function() { //Ang Mo Kio Avenue 5
    push();
    translate(0, (S109_Value/2)*-1 ,-10);
    normalMaterial();
    box(5, S109_Value, 5);
    pop();
  },
  
  S90: function() { //Bukit Timah Road
    push();
    translate(-11, (S90_Value/2)*-1 , 7);
    normalMaterial();
    box(5, S90_Value, 5);
    pop();
  },
  
  S114: function() { //Choa Chu Kang Ave 4
    push();
    translate(-52, (S114_Value/2)*-1 , -15);
    normalMaterial();
    box(5, S114_Value, 5);
    pop();
  },
  
  S11: function() { //Choa Chu Kang Road
    push();
    translate(-65, (S11_Value/2)*-1 , -12);
    normalMaterial();
    box(5, S11_Value, 5);
    pop();
  },
  
  S50: function() { //Clementi Road
    push();
    translate(-33, (S50_Value/2)*-1 , 2);
    normalMaterial();
    box(5, S50_Value, 5);
    pop();
  },
  
  S107: function() { //East Coast Parkway
    push();
    translate(50, (S107_Value/2)*-1 , 11);
    normalMaterial();
    box(5, S107_Value, 5);
    pop();
  },
  
  S215: function() { //Geylang East Central
    push();
    translate(20, (S215_Value/2)*-1 , 5);
    normalMaterial();
    box(5, S215_Value, 5);
    pop();
  },
  
  S118: function() { //Handy Road
    push();
    translate(-1, (S118_Value/2)*-1 , 16);
    normalMaterial();
    box(5, S118_Value, 5);
    pop();
  },
  
   S120: function() { //Holland Road
    push();
    translate(-13, (S120_Value/2)*-1 , 13);
    normalMaterial();
    box(5, S120_Value, 5);
    pop();
  },
  
   S33: function() { //Jurong Pier Road
    push();
    translate(-61, (S33_Value/2)*-1 , 14);
    normalMaterial();
    box(5, S33_Value, 5);
    pop();
  },
  
   S71: function() { //Kent Ridge Road
    push();
    translate(-30, (S71_Value/2)*-1 , 25);
    normalMaterial();
    box(5, S71_Value, 5);
    pop();
  },

  S43: function() { //Kim Chuan Road
    push();
    translate(18, (S43_Value/2)*-1 , -1);
    normalMaterial();
    box(5, S43_Value, 5);
    pop();
  },

  S66: function() { //Kranji Way
    push();
    translate(-41, (S66_Value/2)*-1 , -38
    );
    normalMaterial();
    box(5, S66_Value, 5);
    pop();
  },

  S112: function() { //Lim Chu Kang Road
    push();
    translate(-66, (S112_Value/2)*-1 , -35);
    normalMaterial();
    box(5, S112_Value, 5);
    pop();
  },

  S40: function() { //Mandai Lake Road
    push();
    translate(-22, (S40_Value/2)*-1 , -25);
    normalMaterial();
    box(5, S40_Value, 5);
    pop();
  },
  
  S108: function() { //Marina Gardens Drive
    push();
    translate(17, (S108_Value/2)*-1 , 20);
    normalMaterial();
    box(5, S108_Value, 5);
    pop();
  },
  
  S113: function() { //Marina Parade Road
    push();
    translate(34, (S113_Value/2)*-1 , 14);
    normalMaterial();
    box(5, S113_Value, 5);
    pop();
  },
  
  S44: function() { //Nanyang Avenue
    push();
    translate(-70, (S44_Value/2)*-1 , 0);
    normalMaterial();
    box(5, S44_Value, 5);
    pop();
  },
  
  S121: function() { //Old Choa Chu Kang Road
    push();
    translate(-55, (S121_Value/2)*-1 , -10);
    normalMaterial();
    box(5, S121_Value, 5);
    pop();
  },
  
  S35: function() { //Old Toh Tuck Road
    push();
    translate(-40, (S35_Value/2)*-1 , 2);
    normalMaterial();
    box(5, S35_Value, 5);
    pop();
  },
  
  S94: function() { //Pasir Ris Street 51
    push();
    translate(27, (S94_Value/2)*-1 , -21);
    normalMaterial();
    box(5, S94_Value, 5);
    pop();
  },
  
  S78: function() { //Poole Road
    push();
    translate(27, (S78_Value/2)*-1 , 10);
    normalMaterial();
    box(5, S78_Value, 5);
    pop();
  },
  
  S106: function() { //Pulau Ubin
    push();
    translate(48, (S106_Value/2)*-1 , -27);
    normalMaterial();
    box(5, S106_Value, 5);
    pop();
  },
  
  S81: function() { //Punggol Central
    push();
    translate(14, (S81_Value/2)*-1 , -23);
    normalMaterial();
    box(5, S81_Value, 5);
    pop();
  },
  
  S201: function() { //Ulu Pandan Park Connector
    push();
    translate(-35, (S201_Value/2)*-1 , 8);
    normalMaterial();
    box(5, S201_Value, 5);
    pop();
  },
  
  S202: function() { //Tanglin Secondary School
    push();
    translate(-40, (S202_Value/2)*-1 , 14);
    normalMaterial();
    box(5, S202_Value, 5);
    pop();
  },
  
  S203: function() { //Pasir Panjang Road
    push();
    translate(-35, (S203_Value/2)*-1 , 22.5);
    normalMaterial();
    box(5, S203_Value, 5);
    pop();
  },
  
  S204: function() { //Central 798729
    push();
    translate(7, (S204_Value/2)*-1 , 5);
    normalMaterial();
    box(5, S204_Value, 5);
    pop();
  },
  
  S205: function() { //Tampines Expressway
    push();
    translate(39, (S205_Value/2)*-1 , -10);
    normalMaterial();
    box(5, S205_Value, 5);
    pop();
  },
  
  S207: function() { //Eastwood Walk
    push();
    translate(49, (S207_Value/2)*-1 , 5);
    normalMaterial();
    box(5, S207_Value, 5);
    pop();
  },
  
  S208: function() { //Changi East Close
    push();
    translate(63, (S208_Value/2)*-1 , 10);
    normalMaterial();
    box(5, S208_Value, 5);
    pop();
  },
  
  S209: function() { //585 Yishun Ring Road
    push();
    translate(-2, (S209_Value/2)*-1 , -35);
    normalMaterial();
    box(5, S209_Value, 5);
    pop();
  },
  
  S210: function() { //Woodlands Centre Road
    push();
    translate(-30, (S210_Value/2)*-1 , -42);
    normalMaterial();
    box(5, S210_Value, 5);
    pop();
  },
  
  S211: function() { //Kranji Road
    push();
    translate(-35.5, (S211_Value/2)*-1 , -40);
    normalMaterial();
    box(5, S211_Value, 5);
    pop();
  },
  
  S212: function() { //22 Bedok South Road
    push();
    translate(42, (S212_Value/2)*-1 , 10);
    normalMaterial();
    box(5, S212_Value, 5);
    pop();
  },
  
  S213: function() { //Coronation Walk
    push();
    translate(-20, (S213_Value/2)*-1 , 0);
    normalMaterial();
    box(5, S213_Value, 5);
    pop();
  },
  
  S214: function() { //Tanjong Rhu Road
    push();
    translate(23, (S214_Value/2)*-1 , 15);
    normalMaterial();
    box(5, S214_Value, 5);
    pop();
  },
  
  S216: function() { //3 Ang Mo Kio Avenue 10
    push();
    translate(2, (S216_Value/2)*-1 , -5);
    normalMaterial();
    box(5, S216_Value, 5);
    pop();
  },
  
  S217: function() { //10 Bishan Street 13
    push();
    translate(2.5, (S217_Value/2)*-1 , 0);
    normalMaterial();
    box(5, S217_Value, 5);
    pop();
  },
  
  S218: function() { //3 Bukit Batok Street 34
    push();
    translate(-40, (S218_Value/2)*-1 , -10);
    normalMaterial();
    box(5, S218_Value, 5);
    pop();
  },
  
  S219: function() { //After Ang Mo Kio Avenue 5
    push();
    translate(8, (S219_Value/2)*-1 , -15);
    normalMaterial();
    box(5, S219_Value, 5);
    pop();
  },
  
  S220: function() { //10 Compassvale Lane
    push();
    translate(21, (S220_Value/2)*-1 , -21);
    normalMaterial();
    box(5, S220_Value, 5);
    pop();
  },
  
  S221: function() { //47 Hougang Avenue 1
    push();
    translate(19, (S221_Value/2)*-1 , -8);
    normalMaterial();
    box(5, S221_Value, 5);
    pop();
  },
  
  S222: function() { //1 Henderson Road
    push();
    translate(-9, (S222_Value/2)*-1 , 21.5);
    normalMaterial();
    box(5, S222_Value, 5);
    pop();
  },
  
  S223: function() { //2A Margaret Drive
    push();
    translate(-21, (S223_Value/2)*-1 , 19);
    normalMaterial();
    box(5, S223_Value, 5);
    pop();
  },
  
  S224: function() { //Changi Airport Connector
    push();
    translate(65, (S224_Value/2)*-1 , 0);
    normalMaterial();
    box(5, S224_Value, 5);
    pop();
  },
  
  
  S226: function() { //2 Malan Road
    push();
    translate(-18, (S226_Value/2)*-1 , 30);
    normalMaterial();
    box(5, S226_Value, 5);
    pop();
  },
  
  S227: function() { //Woodlands Drive 62
    push();
    translate(-12, (S227_Value/2)*-1 , -40);
    normalMaterial();
    box(5, S227_Value, 5);
    pop();
  },
  
  S228: function() { //1 Jurong West Street 73
    push();
    translate(-55, (S228_Value/2)*-1 , 0);
    normalMaterial();
    box(5, S228_Value, 5);
    pop();
  },
  
  // S229: function() { //60 Jurong West Street 42
  //   push();
  //   translate(18, (samplevaluehigh/2)*-1 , -1);
  //   normalMaterial();
  //   box(5, samplevaluehigh, 5);
  //   pop();
  // },
  
  S230: function() { //147 West Coast Road
    push();
    translate(-35, (S230_Value/2)*-1 , 15);
    normalMaterial();
    box(5, S230_Value, 5);
    pop();
  },
  
  S111: function() { //Scotts Road
    push();
    translate(-7, (S111_Value/2)*-1 , 13);
    normalMaterial();
    box(5, S111_Value, 5);
    pop();
  },
  
  S900: function() { //Seletar Aerospace View
    push();
    translate(7, (S900_Value/2)*-1 , -26);
    normalMaterial();
    box(5, S900_Value, 5);
    pop();
  },
  
  S84: function() { //Simei Avenue
    push();
    translate(35, (S84_Value/2)*-1 , -1);
    normalMaterial();
    box(5, S84_Value, 5);
    pop();
  },
  
  S79: function() { //Somerset Road
    push();
    translate(-5.5, (S79_Value/2)*-1 , 7);
    normalMaterial();
    box(5, S79_Value, 5);
    pop();
  },
  
  S88: function() { //Toa Payoh North
    push();
    translate(-3, (S88_Value/2)*-1 , 1);
    normalMaterial();
    box(5, S88_Value, 5);
    pop();
  },
  
  // S123: function() { //Towner Road
  //   push();
  //   translate(18, (samplevaluehigh/2)*-1 , -1);
  //   normalMaterial();
  //   box(5, samplevaluehigh, 5);
  //   pop();
  // },
  
  S89: function() { //Tuas Road
    push();
    translate(-80, (S89_Value/2)*-1 , 10);
    normalMaterial();
    box(5, S89_Value, 5);
    pop();
  },
  
  S115: function() { //Tuas South Avenue 3
    push();
    translate(-90, (S115_Value/2)*-1 , 10);
    normalMaterial();
    box(5, S115_Value, 5);
    pop();
  },
  
  S82: function() { //Tuas West Road
    push();
    translate(-94, (S82_Value/2)*-1 , 22);
    normalMaterial();
    box(5, S82_Value, 5);
    pop();
  },
  
  S24: function() { //Upper Changi Road North
    push();
    translate(60, (S24_Value/2)*-1 , -10);
    normalMaterial();
    box(5, S24_Value, 5);
    pop();
  },
  
  S69: function() { //Upper Peirce Reservoir Park
    push();
    translate(-20, (S69_Value/2)*-1 , -14);
    normalMaterial();
    box(5, S69_Value, 5);
    pop();
  },
  
  S08: function() { //Upper Thomson Road
    push();
    translate(-10, (S08_Value/2)*-1 , -14);
    normalMaterial();
    box(5, S08_Value, 5);
    pop();
  },
  
  S116: function() { //West Coast Highway
    push();
    translate(-45, (S116_Value/2)*-1 , 7);
    normalMaterial();
    box(5, S116_Value, 5);
    pop();
  },
  
  S104: function() { //Woodlands Avenue 9
    push();
    translate(-22, (S104_Value/2)*-1 , -44);
    normalMaterial();
    box(5, S104_Value, 5);
    pop();
  },
  
  // S100: function() { //Woodlands Road
  //   push();
  //   translate(18, (samplevaluehigh/2)*-1 , -1);
  //   normalMaterial();
  //   box(5, samplevaluehigh, 5);
  //   pop();
  // },
  

}

function drawPlotBoxes() {
  plotbox.S77();
  plotbox.S109();
  plotbox.S90();
  plotbox.S114();
  plotbox.S11();
  plotbox.S50();
  plotbox.S107();
  plotbox.S215();
  plotbox.S118();
  plotbox.S120();
  plotbox.S33();
  plotbox.S71();
  plotbox.S43();
  plotbox.S66();
  plotbox.S112();
  plotbox.S40();
  plotbox.S108();
  plotbox.S113();
  plotbox.S44();
  plotbox.S121();
  plotbox.S35();
  plotbox.S94();
  plotbox.S78();
  plotbox.S106();
  plotbox.S81();
  plotbox.S201();
  plotbox.S202();
  plotbox.S203();
  plotbox.S204();
  plotbox.S205();
  plotbox.S207();
  plotbox.S208();
  plotbox.S209();
  plotbox.S210();
  plotbox.S211();
  plotbox.S212();
  plotbox.S213();
  plotbox.S214();
  plotbox.S216();
  plotbox.S217();
  plotbox.S218();
  plotbox.S219();
  plotbox.S220();
  plotbox.S221();
  plotbox.S222();
  plotbox.S223();
  plotbox.S224();
  plotbox.S226();
  plotbox.S227();
  plotbox.S228();
  //plotbox.S229();
  plotbox.S230();
  plotbox.S111();
  plotbox.S900();
  plotbox.S84();
  plotbox.S79();
  plotbox.S88();
  // plotbox.S123();
  plotbox.S89();
  plotbox.S115();
  plotbox.S82();
  plotbox.S24();
  plotbox.S69();
  plotbox.S08();
  plotbox.S116();
  plotbox.S104();
  // plotbox.S100();

}

