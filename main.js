canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_heigth = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar_x = 5;
greencar_y = 225;


function add() {
	background_ImgTag = new Image();
	background_ImgTag.onload = upLoadBackground;
	background_ImgTag.src = background_image;

	greencar_ImgTag = new Image();
	greencar_ImgTag.onload = uploadGreenCar;
	greencar_ImgTagsrc = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_ImgTag, 0, 0, canvas.width, canvas.greencar_heigth);

}

function uploadGreenCar() {
	ctx.drawImage(greencar_ImgTag, greencar_x, grenncar_y, greencar_width, greencar_heigth);

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		uploadBackground();
		uploadGreenCar();
	}
}

function down()
{
	if(greencar_y <=400)
	{
		greencar_y = greencar_y + 10;
		uploadBackground();
		uploadGreenCar();
	}
}

function left()
{
	if(greencar_x >=0)
	{
		greencar_x = greencar_x - 10;
		uploadBackground();
		uploadGreenCar();
	}
}

function right()
{
	if(greencar_x <=800)
	{
		greencar_x = greencar_x + 10;
		uploadBackground();
		uploadGreenCar();
	}
}
