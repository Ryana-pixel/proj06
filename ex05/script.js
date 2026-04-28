let inicio = Number(prompt("Digite o primeiro número: "));
let fim = Number(prompt("Digite o segundo número: "));

for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}