let soma = 0;

for (let i = 1; i <= 10; i++) {
    let numero = Number(prompt(`Digite o ${i}º número: `));
    soma += numero;
}

console.log("Soma total:", soma);