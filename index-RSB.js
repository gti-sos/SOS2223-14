var datos = new Array();

datos.push(["Andalucía",2021,20035828,68.6,6.9]);
datos.push(["Almería",2021,1927988,64.5,7.5]);
datos.push(["Cádiz",2021,3844944,78.2,7.1]);
datos.push(["Córdoba",2021,1136002,66.2,3]);
datos.push(["Granada",2021,2641329,67.3,4.7]);
datos.push(["Huelva",2021,2015905,58.7,7.6]);
datos.push(["Jaén",2021,708561,74.5,2.7]);
datos.push(["Málaga",2021,5337807,65.4,8.3]);
datos.push(["Sevilla",2021,2423292,72.5,3.7]);
datos.push(["Andalucía",2022,30769974,72.5,6.4]);
datos.push(["Almería",2022,2514258,66.8,7.3]);
datos.push(["Cádiz",2022,5406797,84.5,6.9]);
datos.push(["Córdoba",2022,1883120,72.6,3.2]);
datos.push(["Granada",2022,4006663,73.4,4.3]);
datos.push(["Huelva",2022,3232381,56.9,6.3]);
datos.push(["Jaén",2022,984601,78.7,2.6]);
datos.push(["Málaga",2022,8325665,71.3,7.4]);
datos.push(["Sevilla",2022,4416490,72.6,3.5]);

//console.log(datos);
/*

//  Media indicando campo del que se quiere obtener.

function media(data,n) {
    var acum;
    acum=0;
    if (n>1) {
        for (var i=0;i<data.length;i++) {
            acum = data[i][n] + acum;
        }
        console.log("La media del campo indicado es: "+acum/data.length);
    } else {
        console.log("No se puede realizar una media aritmética con estos datos.")
    }
}
*/

//  Obtención de todas las posibles medias de los datos.

function media(data) {
    var acum_t;
    var acum_g;
    var acum_e;
    acum_t=0; 
    acum_g=0; 
    acum_e=0;
    
    for (var i=0;i<data.length;i++) {
        acum_t = data[i][2] + acum_t;
        acum_g = data[i][3] + acum_g;
        acum_e = data[i][4] + acum_e;
    }
    
    console.log("La media de turistas en Andalucía es de : "+acum_t/data.length);
    console.log("El gasto medio diario producido por turistas en Andalucía es de : "+acum_g/data.length);
    console.log("La estancia media de turistas en Andalucía es de : "+acum_e/data.length);
}
/*
media(datos,0);
media(datos,1);
media(datos,2);
media(datos,3);
media(datos,4);
*/

media(datos);