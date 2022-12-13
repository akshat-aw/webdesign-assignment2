
var color = new Array();
color[0] = "#CC99FF";
color[1] = "#FF99CC";
color[2] = "#FF9999";
color[3] = "#FFCC99";
color[4] = "#FFFF99";
color[5] = "#CCFF99";
color[6] = "#99FF99";
color[7] = "#99FFCC";
color[8] = "#66FFFF";
color[9] = "#66CCFF";

setInterval(

    function changeColor()
    {
        var randomColor = Math.floor(Math.random() * color.length);
        document.body.style.backgroundColor = color[randomColor];
        
    }
   ,5000)


// setInterval(
//     function () {
//       var randomColor = Math.floor(Math.random()*16777215).toString(16);
//       document.body.style.backgroundColor = "#"+randomColor;
//     },2000);


    function boldText(){
    var target = document.getElementById("TextArea");
    if( target.style.fontWeight == "bolder" ) {
        target.style.fontWeight = "normal";
    } else {
        target.style.fontWeight = "bolder";
    }
}



function italicText(){
    var target = document.getElementById("TextArea");
    if( target.style.fontStyle == "italic" ) {
        target.style.fontStyle = "normal";
    } else {
        target.style.fontStyle = "italic";
    }
}

function underlineText(){
    var target = document.getElementById("TextArea");
    if( target.style.textDecoration == "underline" ) {
        target.style.textDecoration = "none";
    } else {
        target.style.textDecoration = "underline";
    }
}

function alertonload() {
    alert("Welcome to our Registeration Page");
  }