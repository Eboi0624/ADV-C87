var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable
blockY=1;
blockX=1;

blockImgW = 350;
blockImgH = 430;

var blockImgObject= "";

function newImg(getImg)
{
    fabric.Image.fromURL(getImg, function(Img) {
    blockImgObject = Img;

    blockImgObject.scaleToWidth(blockImgW);
    blockImgObject.scaleToHeight(blockImgH);
    blockImgObject.set({
    top:blockY,
    left:blockX
    });
    canvas.add(blockImgObject);
    });
}
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
	newImg('rr1.png');
	console.log("Red Ranger Summoned");
	}
	if(keyPressed == '71')
	{
		blockX = 200;
		newImg('gr.png');
		console.log("Green Ranger Summoned");
	}
	
	if(keyPressed == '89')
	{
		blockX =350;
		newImg('yr.png');
		console.log("Yellow Ranger Summoned");
	}
	if(keyPressed == '80')
	{
		blockX = 600;
		newImg('pr.png');
		console.log("Pink Ranger Summoned");
	}
	if(keyPressed == '66')
	{
		blockX = 700;
		newImg('br.png');
	    console.log("Blue Ranger Summoned");
	}
	
}

