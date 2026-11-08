numero_1 = 10;
numero_2 = 5;

proposicion_1 = numero_1 > numero_2;
console.log(`¿El número 10 es mayor que el número 5? ${proposicion_1}`);

proposicion_2 = numero_1 < numero_2;
console.log(`¿El número 10 es menor que el número 5? ${proposicion_2}`);

proposicion_3 = numero_1 === numero_2;
console.log(`¿El número 1 es igual al número 2? ${proposicion_3}`);

texto_1 = "Python"
texto_2 = "JavaScript"
proposicion_4 = texto_1 === texto_2;
console.log(`¿El texto 1 es igual al texto 2? ${proposicion_4}`);

objeto_1 = {nombre: "Juan", edad: 30};
objeto_2 = {nombre: "Carlos", edad: 33};
proposicion_5 = objeto_1 === objeto_2;
console.log(`¿Los objetos son iguales? ${proposicion_5}`);

proposicion_6 = proposicion_1 && proposicion_2;
console.log(`AND lógico: ${proposicion_6}`);

proposicion_7 = proposicion_1 || proposicion_2;
console.log(`OR lógico: ${proposicion_7}`);

console.log(`La suma de 10 + 3: ${10 + 3}`);
console.log(`La resta de 10 - 3: ${10 - 3}`);
console.log(`La multiplicación de 10 * 3: ${10 * 3}`);
console.log(`La división de 10 / 3: ${10 / 3}`);
console.log(`10 módulo 3: ${10 % 3}`);