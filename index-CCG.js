/* EJERCICIO:
  Realice un algoritmo usando iteradores (forEach, Map, filter, …) que permita
  calcular la media de valores de alguna de los campos numéricos del subconjunto
  de filas que comparten un determinado valor en el campo de información geográfica.
*/

var array_listas = new Array();
array_listas = [
    ["Almería",2021,175430,852651,4.9],["Cádiz",2021,141934,547194,3.9],["Córdoba",2021,40273,92011,2.3],["Granada",2021,208463,527799,2.5],["Huelva",2021,70746,324824,4.6],["Jaén",2021,54969,138818,2.5],["Málaga",2021,722109,3411916,4.7],["Sevilla",2021,220579,669075,3],["Almería",2022,221240,980040,4.4],["Cádiz",2022,249383,805508,3.2],["Córdoba",2022,67647,141530,2.1],["Granada",2022,280920,759208,2.7],["Huelva",2022,86304,32581,3.9],["Jaén",2022,60408,142543,2.4],["Málaga",2022,1087377,5479489,5],["Sevilla",2022,420921,1218569,2.9]];

var valores = new Array();
valores = ["province","year","traveler","overnight_stay","average_stay"];


//Lectura datos
console.log("\nLectura fichero:\n");
array_listas.forEach((x) =>{
    console.log(x,"\n");
})

//Funciones
function funcion_1(province, numeric_field){
    var media = 0;
    var suma = 0;
    var i = valores.indexOf(numeric_field);
    for(var j=0; j<array_listas.length; j++){
        var lista = array_listas[j];
        if(lista[0]===province){
            media++;
            var numero = lista[i];
            suma = suma+numero;
        }
    }
    console.log("-Función 1:\nCampo numérico: ",numeric_field,"\nProvincia: ", province,"\nLa media es: ",suma/media);
}

function funcion_2(province, numeric_field){
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

    console.log("-Función 2:\nCampo numérico: ",numeric_field,"\nProvincia: ", province,"\nLa media es: ",suma/media);
}

//Llamada funciones
console.log("Llamada funciones:\n");
funcion_1("Córdoba", "overnight_stay");
console.log("\n");
funcion_2("Sevilla", "traveler");