function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_collects_coin = loadSound("coin.wav")
	game_over = loadSound("gameover.wav")
	mario_die = loadSound("mariodie.wav")
	enemy_die = loadSound("kick.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);
	video = createCapture(VIDEO)
	video.size(800,400)
	video.parent("game_console")
	posenet=ml5.poseNet(video,modelloaded)
	posenet.on("pose",gotPoses)
}

function draw() {
	game()
}
function modelloaded(){
	console.log("modelloaded")
}
function gotPoses(result){
	if(result.length>0)
	{
		console.log(result)
		nosex=result[0].pose.nose.x
		nosey=result[0].pose.nose.y
		console.log(nosex)
		console.log(nosey)
	}
}






