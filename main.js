
var canvas = new fabric.Canvas('myCanvas')// C de canvas é maiusculo
 block_y=1;//sem _ e y estava maiusculo
 block_x=1;//sem _ e x estava maiusculo

block_image_width = 350;//I estava maíusculo em vez de minusculo e sem _ e w maíusculo em vez de minusculo
block_image_height = 430;//I estava maíusculo em vez de minusculo e sem _e h maíusculo em vez de minusculo

var block_image_object= "";//I estava maíusculo em vez de minusculo e sem _e o maíusculo em vez de minusculo

function new_image(get_image)// i maiusculo em vez de minusculo e sem _
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:block_y,
	left:block_x
	});
	canvas.add(block_image_object);

	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	
	if(keyPressed == '69')
	{
		new_image('rr1.png'); 
		console.log("r");
	}
	if(keyPressed == '86')
	{
		block_x = 200;
		new_image('gr.png'); 
		console.log("g");
	}
	
	if(keyPressed == '65')
	{
		block_x =350;
		new_image('yr.png'); 
		console.log("y");
	}
	if(keyPressed == '82')
	{
		block_x = 600;
		new_image('pr.png'); 
		console.log("p");
	}
	if(keyPressed == '73')
	{
		block_x = 700;
		new_image('br.png'); 
		console.log("b");
	}
	
}
