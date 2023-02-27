/*
  Realice un algoritmo usando iteradores (forEach, Map, filter, …) que permita
  calcular la media de valores de alguna de los campos numéricos del subconjunto
  de filas que comparten un determinado valor en el campo de información geográfica.
*/

var lista = new Array();
//lista.push({province: "Andalucía", year: 2021, average_employment: 22.327, estimated_average_open_establishment: 1.819, estimated_average_place: 182.638, estimated_room: 84.214, occupancy_rate_by_place: 44, occupancy_rate_by_weekend_place: 52, occupancy_rate_by_weekend_place: 50});
lista.push({province: "Almería", year: 2021, average_employment: 1.848, estimated_average_open_establishment: 138, estimated_average_place: 18.924, estimated_room: 7.487, occupancy_rate_by_place: 43, occupancy_rate_by_weekend_place: 49, occupancy_rate_by_weekend_place: 52});
lista.push({province: "Sevilla", year: 2021, average_employment: 4.112, estimated_average_open_establishment: 351, estimated_average_place: 30.156, estimated_room: 13.874, occupancy_rate_by_place: 48, occupancy_rate_by_weekend_place: 56, occupancy_rate_by_weekend_place: 55});
lista.push({province: "Córdoba", year: 2021, average_employment: 828, estimated_average_open_establishment: 148, estimated_average_place: 8.784, estimated_room: 4.438, occupancy_rate_by_place: 33, occupancy_rate_by_weekend_place: 42, occupancy_rate_by_weekend_place: 40});
lista.push({province: "Granada", year: 2021, average_employment: 1.948, estimated_average_open_establishment: 278, estimated_average_place: 21.678, estimated_room: 10.340, occupancy_rate_by_place: 37, occupancy_rate_by_weekend_place: 47, occupancy_rate_by_weekend_place: 43});
lista.push({province: "Huelva", year: 2021, average_employment: 1.846, estimated_average_open_establishment: 110, estimated_average_place: 12.693, estimated_room: 5.689, occupancy_rate_by_place: 53, occupancy_rate_by_weekend_place: 61, occupancy_rate_by_weekend_place: 57});
lista.push({province: "Jaén", year: 2021, average_employment: 755, estimated_average_open_establishment: 142, estimated_average_place: 7.039, estimated_room: 3.627, occupancy_rate_by_place: 27, occupancy_rate_by_weekend_place: 35, occupancy_rate_by_weekend_place: 31});
lista.push({province: "Málaga", year: 2021, average_employment: 8548, estimated_average_open_establishment: 401, estimated_average_place: 59.870, estimated_room: 27.065, occupancy_rate_by_place: 48, occupancy_rate_by_weekend_place: 54, occupancy_rate_by_weekend_place: 54});
lista.push({province: "Sevilla", year: 2021, average_employment: 2.441, estimated_average_open_establishment: 250, estimated_average_place: 23.494, estimated_room: 11.694, occupancy_rate_by_place: 40, occupancy_rate_by_weekend_place: 50, occupancy_rate_by_weekend_place: 46});
//lista.push({province: "Andalucía", year: 2022, average_employment: 34.976, estimated_average_open_establishment: 2.343, estimated_average_place: 248.005, estimated_room: 113.710, occupancy_rate_by_place: 54, occupancy_rate_by_weekend_place: 62, occupancy_rate_by_weekend_place: 62});
lista.push({province: "Almería", year: 2022, average_employment: 2.968, estimated_average_open_establishment: 179, estimated_average_place: 25.974, estimated_room: 10.190, occupancy_rate_by_place: 47, occupancy_rate_by_weekend_place: 54, occupancy_rate_by_weekend_place: 59});
lista.push({province: "Sevilla", year: 2022, average_employment: 5.896, estimated_average_open_establishment: 408, estimated_average_place: 38.916, estimated_room: 17.735, occupancy_rate_by_place: 53, occupancy_rate_by_weekend_place: 61, occupancy_rate_by_weekend_place: 61});
lista.push({province: "Córdoba", year: 2022, average_employment: 1.209, estimated_average_open_establishment: 183, estimated_average_place: 10.936, estimated_room: 5.509, occupancy_rate_by_place: 44, occupancy_rate_by_weekend_place: 55, occupancy_rate_by_weekend_place: 51});
lista.push({province: "Granada", year: 2022, average_employment: 3.178, estimated_average_open_establishment: 361, estimated_average_place: 29.478, estimated_room: 14.080, occupancy_rate_by_place: 47, occupancy_rate_by_weekend_place: 58, occupancy_rate_by_weekend_place: 53});
lista.push({province: "Huelva", year: 2022, average_employment: 2.720, estimated_average_open_establishment: 136, estimated_average_place: 18.341, estimated_room: 8.055, occupancy_rate_by_place: 53, occupancy_rate_by_weekend_place: 62, occupancy_rate_by_weekend_place: 58});
lista.push({province: "Jaén", year: 2022, average_employment: 926, estimated_average_open_establishment: 161, estimated_average_place: 8.016, estimated_room: 4.040, occupancy_rate_by_place: 33, occupancy_rate_by_weekend_place: 45, occupancy_rate_by_weekend_place: 39});
lista.push({province: "Málaga", year: 2022, average_employment: 13.875, estimated_average_open_establishment: 548, estimated_average_place: 84.299, estimated_room: 38.044, occupancy_rate_by_place: 61, occupancy_rate_by_weekend_place: 66, occupancy_rate_by_weekend_place: 71});
lista.push({province: "Sevilla", year: 2022, average_employment: 4.203, estimated_average_open_establishment: 365, estimated_average_place: 32.045, estimated_room: 16.057, occupancy_rate_by_place: 56, occupancy_rate_by_weekend_place: 65, occupancy_rate_by_weekend_place: 63});

/*lista.forEach(function(elemento, indice, array) {
  console.log(elemento, indice);
})*/

function average(provincia, dato){
  var acum = 0;
  var div = lista.length;


  lista.filter(function(data) {return lista.province == provincia})

  if(dato == "average_employment"){
      lista.forEach(e => {acum += e.average_employment});
  }else if(dato == "estimated_average_open_establishment"){
      lista.forEach(e => {acum += e.estimated_average_open_establishment});
  }else if(dato == "estimated_room"){
      lista.forEach(e => {acum += e.estimated_room});
  }
  return acum/div;
}

console.log("La media de empleo en hoteles de Cádiz es de: " + average("Cádiz", "average_employment"));
console.log("La media de habitaciones estimadas en Sevilla es de: " + average("Sevilla", "estimated_average_open_establishment"));