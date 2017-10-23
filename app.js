//Definir una función que nos quitara los duplicados
/*var removerDuplicados = function (arreglo){
  var arregloNuevo = [];
  for(var i = 0; i <= arreglo.length; i+=1){
    if (arregloNuevo.indexOf(arreglo[i]===-1){
      console.log("no esta el número" + arreglo[i]);
      arregloNuevo.push(arreglo[i])
    }
  }
  return arregloNuevo
}

var enviarArreglo = [4,7,9,4,0,7];
document.write(removerDuplicados(enviarArreglo));*/
//Definir lafunción que nos quitará
var removerDuplicados =  function (arreglo){
     var arregloNuevo = [];
     for (var i = 0; i <= arreglo.length; i+=1){
      if (arregloNuevo.indexOf(arreglo[i])===-1){
        console.log("no esta el numero " + arreglo[i]);
        arregloNuevo.push(arreglo[i])
      }
     }
return arregloNuevo
}


var enviaArreglo = [4,7,9,4,0,7];
document.write(removerDuplicados(enviaArreglo));
