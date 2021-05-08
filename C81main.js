//this is all in JAVASCRIPT LANG
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";


ctx.beginPath(); //move forward or start drawing
ctx.strokeStyle = color; //border color
ctx.lineWidth = 2; //width of the line 
ctx.arc(200, 200, 40, 0, 2 * Math.PI); //x,y,radius,starting-angle,360
ctx.stroke(); //border color (calling it)


canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + ",Y = " + mouse_y);
    circle(mouse_x, mouse_y);
}
function circle(mouse_x , mouse_y)
{
ctx.beginPath(); //move forward or start drawing
ctx.strokeStyle = color; //border color
ctx.lineWidth = 2; //width of the line 
ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI); //x,y,radius,starting-angle,360
ctx.stroke(); //border color (calling it)
}