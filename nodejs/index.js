/*
                    CLASE 17/02

console.log("Hello world");
var a;                          // No es necesario declarar las variables pero es recomendable.
a = 1;
console.log(a);

// Las variables reconocen de qué tipo son de forma automática.
var myInteger = 1;
var myDouble = 2.1;
var myString = "Pablo";
var myBoolean = true;

var my = 1;
my = 2.1;
my = "Pablo";
my = true;

console.log(my);                // 'my' toma el ultimo valor que se le ha asignado.

myDouble = "petete" + 1;        // Concatena petete con 1 dando como resultado "petete1".
console.log(myDouble); 

var userInt = "1";
myDouble = myDouble + parseInt(userInt);        // Concatena petete con 1 dando como resultado "petete11".
console.log(myDouble);

var a = 1, b = 1;                               // Da como resultado "Iguales!"
if (a == b) {
    console.log("Iguales!");
} else {
    console.log("Distintos!");
}

var a = 1, b = "1";                               // Da como resultado "Iguales!"
if (a == b) {
    console.log("Iguales!");
} else {
    console.log("Distintos!");
}


var id = "test";
var s = "<body id='"+id+"'>";
s = '<body id="'+id+'">';
s = `<body id="${id}">`;


function log(msg) {
    console.log(msg);
    //console.log(msg+this.name);
}

log("Mi fantastico log".toLowerCase());

var o = new Object();

o.name = "petete";
o.l = log;
o.l("log del objeto");


var m = new Map();

var numbers = new Array();

var numbers = [1,2,3,4];

a[0] = 1;
a[1] = 2;
a[2] = 3;
a[3] = 4;

a.push(5);              // Añade un valor al final.

log(a);


for (var i=0;i<numbers.length;i++) {
    log(numbers[i]);
}

// CALLBACKs:

numbers.forEach(log);               // Esta línea de código es igual al bucle for 
                                    // anteriormente mencionado.

numbers.forEach(function log(msg){
    console.log("v2: "+msg);
});

numbers.forEach(function(msg){
    console.log("v3: "+msg);
});

numbers.forEach((msg) => {
    console.log("v4: "+msg);
});

numbers.filter((n) => {
    return n > 2;
}).forEach(log);

var i =  numbers
    .filter((n) => {
        return n > 2;
    }).map((n) =>{
        return n + 1;
    }).reduce((a,n) => {
        return n+a;
    });

log(i);

*/

//                  CLASE 24/02
/*
var cool = require("cool-ascii-faces");
var express = require("express");
//var port = 12345;   gcloud app deploy  -> 11
var port = process.env.PORT || 12345;
var app = express();

app.get("/faces", (request,response) => {
    response.send(cool());
    console.log("New request");
});

app.listen(port,() =>{
    console.log(`Server ready in port ${port}`);
});
*/
var express = require("express");
var cool = require("cool-ascii-faces");

var app = express();
var port = process.env.PORT || 12345;

app.get("/cool",(request,response) => {
    response.send(cool());
    console.log("New request");
});

// Que se quede escuchando en un puerto (Asignarle un puerto)

app.listen(port,() => {
    console.log(`Server ready in port ${port}.`);
});