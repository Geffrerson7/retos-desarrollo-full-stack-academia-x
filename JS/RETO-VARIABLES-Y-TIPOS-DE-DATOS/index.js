let saludo = "¡Hola Mundo!";
let nombre = "Juan";
let lista = [1, 2, 3, 4, 5];
let texto = "La lluvia en Sevilla es una maravilla";

console.log(`${saludo} Soy ${nombre}`);
console.log(`Mi nombre en mayúsculas es: ${nombre.toUpperCase()}`);
console.log(`Mi nombre en minúsculas es: ${nombre.toLowerCase()}`);
console.log(`El mensaje de "¡Hola, mundo!" tiene ${saludo.length} caracteres.`);
console.log(
  `El tercer número del array con los valores "1, 2, 3, 4, 5" es: ${lista[2]}`,
);
lista.push(6);
console.log(
  `Se añade el número que sigue en orden al final del arreglo y es: ${lista[lista.length - 1]}`,
);
console.log(
  `Se encontró el patrón 'lluvia' en la frase "${texto}" por lo que el resultado es: ${texto.match(/lluvia/)[0]}`
);
