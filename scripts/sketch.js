var game;

function setup(){
	createCanvas(windowWidth, windowHeight);
	game = new Game();
	game.init();
	//game.store();
}

function draw(){
	background(40);
	game.render();
}

function mousePressed() {
	game.ttt.mousePressed(mouseX, mouseY);
	game.ttt.resetButton.click();
}
function mouseReleased(){
	game.ttt.resetButton.clearClickEffect();
}