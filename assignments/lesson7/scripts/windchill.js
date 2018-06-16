    /*---stepone---*/
var t = (90 + 66) / 2;
var power = Math.pow(5, 0.16);
var u = 0.4275 * t;


/*---step2---*/
var a = 35.74;
var b = 0.6215 * t;
var c = 35.75 * power;
var d = u * power;

var f = a + b - c + d;
    
/*---OUTPUT---*/
document.getElementById("chill").innerHTML = "The wind chill is" + f + ".";


