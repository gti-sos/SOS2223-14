/* EJERCICIO:
  Realice un algoritmo usando iteradores (forEach, Map, filter, …) que permita
  calcular la media de valores de alguna de los campos numéricos del subconjunto
  de filas que comparten un determinado valor en el campo de información geográfica.
*/

/*
    Lectura datos
    console.log("\nLectura fichero:\n");
    array_listas.forEach((x) =>{
        console.log(x,"\n");
    })
*/

//Carga de datos
var array_listas = new Array();
array_listas.push(["Almería",2021,175430,852651,4.9]);
array_listas.push(["Cádiz",2021,141934,547194,3.9]);
array_listas.push(["Córdoba",2021,40273,92011,2.3]);
array_listas.push(["Granada",2021,208463,527799,2.5]);
array_listas.push(["Huelva",2021,70746,324824,4.6]);
array_listas.push(["Jaén",2021,54969,138818,2.5]);
array_listas.push(["Málaga",2021,722109,3411916,4.7]);
array_listas.push(["Sevilla",2021,220579,669075,3]);
array_listas.push(["Almería",2022,221240,980040,4,4]);
array_listas.push(["Cádiz",2022,249383,805508,3.2]);
array_listas.push(["Córdoba",2022,67647,141530,2.1]);
array_listas.push(["Granada",2022,280920,759208,2.7]);
array_listas.push(["Huelva",2022,86304,332581,3.9]);
array_listas.push(["Jaén",2022,60408,142543,2.4]);
array_listas.push(["Málaga",2022,1087377,5479489,5]);
array_listas.push(["Sevilla",2022,420921,1218569,2.9]);

var valores = new Array();
var province;
var numeric_field;
valores = ["province","year","traveler","overnight_stay","average_stay"];

function funcion_funcional (province, numeric_field){
    var suma = 0;
    var media = 0;
    var i = valores.indexOf(numeric_field);
    var c = array_listas.filter((x) => {
        return x[0]===province;
    }).forEach((x) =>{
        media++;
        var numero = x[i];
        suma = suma+numero;
    });
    console.log("\n---------EJERCICIO:---------")
    var s = `Campo numérico:${numeric_field}  Provincia:${province}  La media es:${suma/media}`;
    return s;
};

function getAll(){
    return array_listas;
};

exports.getAll = getAll();
exports.funcional = funcion_funcional("Sevilla","traveler");
/*
    ESCRIBIR LOS DATOS EN CONSOLA
        var answers = [];
        var questions = ["Which is the province?:\n","Which is the numeric field?:\n"];

        function question(i){
            process.stdout.write(questions[i]);
        }

        process.stdin.on('data', function(data){
            answers.push(data.toString());

            if(answers.length < questions.length){
                question(answers.length);
            }
            else{
                province = answers[0];
                numeric_field = answers[1];
                province = province.trim();
                numeric_field = numeric_field.trim();
            //funcion_iterativa(province, numeric_field);
                funcion_funcional(province, numeric_field);
                process.exit();
            }
        });

        question(0);
*/