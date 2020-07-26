//params
var SEGMENT = 6
var ANGLE = 20
var ITERATIONS = 5
var AXIOM = "O"
var isWebglActive = false

var COLORS = {
    COLOR_BACKGROUND: "#54c9a8",
    COLOR_SEGMENT: "#2b911f",
    COLOR_FLOWER: "#ffcb13"
}

var PARAMS = {
  FLOWER_RADIUS: 5
}

var START_X = 0
var START_Y = 200


var RULES = {
  RULE1: "F -> FF",
  RULE2: "O -> F[+OO]F[-OO]O"
}

function setup() {

    if (isWebglActive) {
      createCanvas(windowWidth, windowHeight, WEBGL);
      START_X = 0
      START_Y = 200
    }
    else {
      createCanvas(windowWidth, windowHeight);
      START_X = windowWidth/2
      START_Y = windowHeight*0.9 
    }  
    

    settings = QuickSettings.create(20, 20, "Settings");

    //PARAMS
    settings.addRange("Segment", 0, 30, SEGMENT, 1, function(value) {
		SEGMENT = value;
		redraw();
    });
    settings.addRange("Angle", 0, 360, ANGLE, 1, function(value) {
		ANGLE = value;
		redraw();
    });
    settings.addRange("Iterations", 0, 7, ITERATIONS, 1, function(value) {
		ITERATIONS = value;
		redraw();
    });
    settings.addRange("Flower radius", 0, 30, PARAMS.FLOWER_RADIUS, 1, function(value) {
      PARAMS.FLOWER_RADIUS = value;
      redraw();
    });
    settings.addText("Axiom", AXIOM, function(value) {
        AXIOM = value;redraw()
    });

    //RULES
    settings.addText("Rule1", RULES.RULE1, function(value) {
        RULES.RULE1 = value;
        redraw();
    });
    settings.addText("Rule2", RULES.RULE2, function(value) {
        RULES.RULE2 = value;
        redraw();
    });
    

    //COLORS
    settings.addColor("background", COLORS.COLOR_BACKGROUND, function(color) {
		COLORS.COLOR_BACKGROUND = color;
		redraw();
    });
    settings.addColor("segment", COLORS.COLOR_SEGMENT, function(color) {
		COLORS.COLOR_SEGMENT = color;
		redraw();
    });
    settings.addColor("flower", COLORS.COLOR_FLOWER, function(color) {
		COLORS.COLOR_FLOWER = color;
		redraw();
    });
    

    //POSITION
    settings.addRange("start x", -windowWidth, windowWidth, START_X, 1, function(value) {
		START_X = value;
		redraw();
    });
    settings.addRange("start y", -windowHeight, windowHeight, START_Y, 1, function(value) {
		START_Y = value;
		redraw();
    });

  
    settings.addButton("save", function() {
        saveImage()
    });
    settings.addButton("export", function() {
        exportParams()
    });

    //DEBUG
    //settings.addButton("Log rules", function() {console.log(RULES);});

   
    noLoop();
}

function draw() {

    var string = run(RULES, ITERATIONS, AXIOM);

    drawer = new Drawer(window.windowWidth, window.windowHeight, START_X, START_Y, COLORS, PARAMS);
    draw_string(string, drawer, ANGLE, SEGMENT);

}


// dynamically adjust the canvas to the window
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function exportParams() {
    var seed = {
        SEGMENT,
        ANGLE,
        ITERATIONS,
        AXIOM,
        RULES,
        COLORS,
        START_X,
        START_Y
    }
    console.log(seed)
    let j = JSON.stringify(seed);
    alert(j)
}

function saveImage(name='img') {
    saveCanvas(canvas, name, 'png');
} 

