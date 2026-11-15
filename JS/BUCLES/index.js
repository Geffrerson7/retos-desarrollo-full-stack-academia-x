//  1. Imprime los números del 1 al 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("------------------");

const frutas = ["rojo", "verde", "azul", "amarillo"];

for (let fruta of frutas) {
  console.log(fruta);
}

console.log("------------------");

const persona = {
  nombre: "María",
  edad: 27,
  profesion: "diseñadora",
};

for (let field in persona) {
  console.log(`${field} : ${persona[field]}`);
}

console.log("------------------");

let numero = 0;
let potencia = 0;
while (numero ** 2 <= 100) {
  potencia = numero;
  numero++;
}
console.log(
  `El número más cercano a 100 cuyo cuadrado es menor que 100 es: ${potencia}`,
);

console.log("------------------");

let numeroPar = 2;
do {
  console.log(numeroPar);
  numeroPar += 2;
} while (numeroPar <= 10);
