var l_touchx, l_touchy;
canvas = document.getElementById('Canvas1');
ctx = canvas.getContext("2d");

color = "black";
width = 10;
var o_width = screen.width;
var n_width = screen.width - 100;
var n_height = screen.height - 100;

if (o_width < 992) {
    document.getElementById("Canvas1").width=n_width;
    document.getElementById("Canvas1").height=n_height;
}

canvas.addEventListener("touchstart", mytouchstart);
function mytouchstart(e)
{   color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    l_touchx=e.touches[0].clientX - canvas.offsetLeft;
    l_touchy=e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", mytouchmove);
function mytouchmove(e)
{   c_touchx = e.touches[0].clientX - canvas.offsetLeft;
    c_touchy = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;

    console.log("last");
    console.log(l_touchx+","+l_touchy);
    ctx.moveTo(l_touchx, l_touchy);

    console.log("current");
    console.log(c_touchx+","+c_touchy);
    ctx.lineTo(c_touchx, c_touchy);
    ctx.stroke();

    l_touchx = c_touchx; 
    l_touchy = c_touchy;
}