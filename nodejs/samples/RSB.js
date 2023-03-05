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

function media(/*data,*/province,i) {
    var acum = 0;
    var filas = 0;
    /*
    data.filter((n) => {
        return n[0]==province;
    }).forEach((n) => {
        acum = n[i] + acum;
        filas++;
    });
    */
    datos.filter((n) => {
        return n[0]==province;
    }).forEach((n) =>{
        acum = n[i] + acum;
        filas++;
    });

    if (i==2) {
        var res = `La media de turistas en ${province} es de ${acum/filas}`;
    } else if (i==3) {
        var res = `La media del gasto medio diario en ${province} es de ${acum/filas}`;
    } else if (i==4) {
        var res = `La media de la estancia media en ${province} es de ${acum/filas}`;
    } else if (i==0) {
        var res = `No es posible realizar una media de este campo.`;
    } else if (i==1) {
        var res = `No es posible realizar una media de este campo.`;
    }
    
    return res;
}

media("Sevilla",0);
media("Sevilla",1);
media("Sevilla",2);
media("Sevilla",3);
media("Sevilla",4);
media("Cádiz",3);
media("Granada",2);
media("Córdoba",4);

exports.funcional = media("Sevilla",2);

