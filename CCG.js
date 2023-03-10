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
var datos = [
    {
        "province": "Almeria",
        "year": 2021,
        "traveler": 175430,
        "overnight_stay": 852651,
        "average_stay": 4.9
    },
    {
        "province": "Cádiz",
        "year": 2021,
        "traveler": 141934,
        "overnight_stay": 547194,
        "average_stay": 3.9
    },
    {
        "province": "Córdoba",
        "year": 2021,
        "traveler": 40273,
        "overnight_stay": 92011,
        "average_stay": 2.3
    },
    {
        "province": "Granada",
        "year": 2021,
        "traveler": 208463,
        "overnight_stay": 527799,
        "average_stay": 2.5
    },
    {
        "province": "Huelva",
        "year": 2021,
        "traveler": 70746,
        "overnight_stay": 324824,
        "average_stay": 4.6
    },
    {
        "province": "Jaén",
        "year": 2021,
        "traveler": 54969,
        "overnight_stay": 138818,
        "average_stay": 2.5
    },
    {
        "province": "Málaga",
        "year": 2021,
        "traveler": 722109,
        "overnight_stay": 3411916,
        "average_stay": 4.7
    },
    {
        "province": "Sevilla",
        "year": 2021,
        "traveler": 220579,
        "overnight_stay": 669075,
        "average_stay": 3
    },
    {
        "province": "Almeria",
        "year": 2022,
        "traveler": 221240,
        "overnight_stay": 980040,
        "average_stay": 4.4
    },
    {
        "province": "Cádiz",
        "year": 2022,
        "traveler": 249383,
        "overnight_stay": 805508,
        "average_stay": 3.2
    },
    {
        "province": "Córdoba",
        "year": 2022,
        "traveler": 67647,
        "overnight_stay": 141530,
        "average_stay": 2.1
    },
    {
        "province": "Granada",
        "year": 2022,
        "traveler": 280920,
        "overnight_stay": 759208,
        "average_stay": 2.7
    },
    {
        "province": "Huelva",
        "year": 2022,
        "traveler": 86304,
        "overnight_stay": 332581,
        "average_stay": 3.9
    },
    {
        "province": "Jaén",
        "year": 2022,
        "traveler": 60408,
        "overnight_stay": 142543,
        "average_stay": 2.4
    },
    {
        "province": "Málaga",
        "year": 2022,
        "traveler": 1087377,
        "overnight_stay": 5479489,
        "average_stay": 5
    },
    {
        "province": "Sevilla",
        "year": 2022,
        "traveler": 420921,
        "overnight_stay": 1218569,
        "average_stay": 2.9
    }
];

function funcion_funcional (province, numeric_field){
    var suma = 0;
    var media = 0;
    
   var c = datos.filter((x) => {
        return x.province===province;
    }).forEach((x) =>{
        media++;
        suma = suma+x[numeric_field];
    });
    console.log("\n---------EJERCICIO:---------")
    var s = `Campo numérico: ${numeric_field} Provincia: ${province} La media es: ${suma/media}`;
    return s;
};

function getAll(){
    return array_listas;
};

module.exports = {datos,funcion_funcional};
//module.exports = {funcion_funcional};

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