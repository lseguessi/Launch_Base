const nome = 'Calor';
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`${nome} você está acima do peso`);
} else {
    console.log(`${nome} você não está acima do peso`);
}

// Cáluclo de aposentadoria

const nome1 = 'Silvana';
const sexo = 'F';
const idade = 48;
const contribuicao = 23;

const calculoContribuicao = idade + contribuicao;

const aposentadoriaHomem = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95;
const aposentadoriaMulher = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85;

if (aposentadoriaHomem || aposentadoriaMulher) {
    console.log(`${nome1} pode aposentar`);
} else {
    console.log(`${nome1} não pode aposentar`);
}