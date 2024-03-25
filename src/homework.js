const { getRouteRegex } = require("next/dist/shared/lib/router/utils/route-regex");

(() => {

  /* Excercises */

  /* First excercise */
  
  let numbers = [1, 2, 3, 4, 5];
  
  /* Multiplique los numeros del arreglo por 5 */

  /*Resultado esperado: [5, 10, 15, 20, 25] */

  /* First excercise */

  let multiplicacion = numbers * 5;
  document.write("la multiplicacion es: " + multiplicacion);

  /* Second excercise */

  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];

  /* Ordernar los nombres alfabeticamente */

  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */

  /* Second excercise */

  const arreglo = names.sort();
  console.log(arreglo);

  /* Thrid excercise */

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];

  /* Dado un arreglo, crear otro sin letras repetidas */
  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */

  /* Thrid excercise */

  const orden = data.sort();
  console.log(orden);
  let arregloUnico = [];

  for (let i = 0; i < orden.length; i++){
    if(arregloUnico.includes(orden[i])){
      console.log("se repite: " + orden[i]);
    }else{
      arregloUnico.push(orden[i])
    }
  }
  console.log(arregloUnico);

  /* Fourth excercise */

  const largeWord = "abcdabcdABCD";

  /* Dado un string mostrar cuantas veces se repite cada letra*/
  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */

  /* Fourth excercise */
  function letraRepetida(texto){
    var contarLetra = 1;
    var letraUnica = [];
    var repetidasAlmacenadas = [];

    texto = texto.toUpperCase().split("").sort();

    for(let i = 0; i < texto.length; i++){
      if(texto[i + 1] === texto[i]){
        contarLetra++;
      }else{
        letraUnica.push(texto[i]);
        repetidasAlmacenadas.push(contarLetra);
        contarLetra + 1;
      }
    }
    console.log(texto[i] + " = " + repetidasAlmacenadas);
  }

  letraRepetida(largeWord);
})();
