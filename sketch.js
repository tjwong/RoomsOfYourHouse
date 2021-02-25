/***********************************************************************************
	RoomsOfYourHouse 
	by Tyler Wong

------------------------------------------------------------------------------------
	This is a sketch that goes through rooms of my dream house and allows you
	to navigate through the house using keys! 
	This program utilizes state change machines that are changed using a pressed
	button. 

***********************************************************************************/

// Array of images
var images = [];

//Array of instruction text
var instructions = [];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 30;

// variable for the middle/heights of the canvas
var midHeight;
var midWidth;

// load all images & instructions into an array
function preload() {
  images[0] = loadImage('assets/living.png');
  images[1] = loadImage('assets/backyard.png');
  images[2] = loadImage('assets/kitchen.png');
  images[3] = loadImage('assets/bedroom.png');
  images[4] = loadImage('assets/bathroom.png');
  images[5] = loadImage('assets/reading.png');
  images[6] = loadImage('assets/splash.png');

  instructions[0] = "Tyler's Dream House!";
  instructions[1] = "Click to continue";
  instructions[2] = "INSTRUCTIONS:";
  instructions[3] = "To navigate through my dream house, press L to enter the Living room!";
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);

  midHeight = height/2;
  midWidth = width/2;  
  textSize(24);

  // set to one for startup
  drawFunction = drawSplash;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(186,184,108);

  // will call your state machine function
  drawFunction();
}

//-- drawInstructions() will draw the array of instructions starting at the middle of the screen
drawInstructions = function() { 
	fill(255,255,178);
	textSize(50);
	text(instructions[2], midWidth, midHeight);

	textSize(24);
	text(instructions[3], midWidth, midHeight + 60);
}

//-- drawLivingRoom() will draw the image at index 0 from the array
drawLivingRoom = function() {
   image(images[0],midWidth, midHeight);

   fill(255,255,178);
   textSize(50);
   text("LIVING ROOM", midWidth, height - gTextOffset);
}

//-- drawBackyard() will draw the image at index 1 from the array
drawBackyard = function() {
   image(images[1],midWidth, midHeight);

   fill(255,255,178);
   text("BACKYARD", midWidth, height - gTextOffset);
}

//-- drawKitchen() will draw the image at index 2 from the array
drawKitchen = function() {
   image(images[2],midWidth, midHeight);

   fill(255,255,178);
   text("KITCHEN", midWidth, height - gTextOffset);
}

//-- drawBedroom() will draw the image at index 3 from the array
drawBedroom = function() {
   image(images[3],midWidth, midHeight);

   fill(255,255,178);
   text("BEDROOM", midWidth, height - gTextOffset);
}

//-- drawBathroom() will draw the image at index 4 from the array
drawBathroom = function() {
   image(images[4],midWidth, midHeight);

   fill(255,255,178);
   text("BATHROOM", midWidth, height - gTextOffset);
}

//-- drawReadingNook() will draw the image at index 4 from the array
drawReadingNook = function() {
   image(images[5],midWidth, midHeight);

   fill(255,255,178);
   text("READING NOOK", midWidth, height - gTextOffset);
}

//-- drawSplash() will draw the image at index 4 from the array
drawSplash = function() {
   image(images[6],midWidth, midHeight);
   fill(255,255,178);

   textSize(50);
   text(instructions[0], midWidth, height - (gTextOffset * 2));

   textSize(24);
   text(instructions[1], midWidth, height - gTextOffset);
}

// Change the drawFunction variable based on your interaction
function keyTyped() {

  if( drawFunction === drawInstructions ) {
  	if( key === 'l' ) {
  		drawFunction = drawLivingRoom;
  	}
  }
  if( drawFunction === drawLivingRoom ) {
  	if( key === 'i' ) {
  		drawFunction = drawBackyard;
  	} 
  	else if( key === 'k' ) {
  		drawFunction = drawKitchen;
  	}
  }
  else if( drawFunction === drawBackyard ) {
  	if( key === 'k' ) {
  		drawFunction = drawKitchen;
  	} 
  	else if( key === 'l' ) {
  		drawFunction = drawLivingRoom;
  	}
  }
  else if( drawFunction === drawKitchen ) {
  	if( key === 'i' ) {
  		drawFunction = drawBackyard;
  	} 
  	else if( key === 'l' ) {
  		drawFunction = drawLivingRoom;
  	}
  	else if( key === 'b' ) {
  		drawFunction = drawBedroom;
  	}
  }
  else if( drawFunction === drawBedroom ) {
  	if( key === 'k' ) {
  		drawFunction = drawKitchen;
  	} 
  	else if( key === 't' ) {
  		drawFunction = drawBathroom;
  	}
  	else if( key === 'r' ) {
  		drawFunction = drawReadingNook;
  	}
  }
  else if( drawFunction === drawBathroom ) {
  	if( key === 'b' ) {
  		drawFunction = drawBedroom;
  	} 
  }
  else if( drawFunction === drawReadingNook ) {
    if( key === 'b' ) {
  		drawFunction = drawBedroom;
  	} 
  }
}

function mousePressed() {
  // only change state if we are in splash screen
  if( drawFunction === drawSplash ) {
    drawFunction = drawInstructions;
  }
}