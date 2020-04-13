const empresa = [
    {   
        nome: 'Rocketseat',
        cor: 'Roxo',
        foco: 'Programação',
        endereco:{
            rua: 'Rua Guilherme Gembala',
            numero: 260
        }
    }   
];

console.log(`A empresa ${empresa[0].nome} está localizada em ${empresa[0].endereco.rua}, ${empresa[0].endereco.numero} `);

const programador = [
    {
        nome: 'Lucas',
        idade: 28,
        tecnologias: [
            {
                nome: 'Javascript', especialidade: 'FronEnd'
            },
            {
                nome: 'Flutter', especialidade: 'FronEnd'
            }
        ]
    }
]

console.log(`O usuário ${programador[0].nome}, tem ${programador[0].idade} e usa a tecnologia ${programador[0].tecnologias[0].nome} em ${programador[0].tecnologias[0].especialidade}`);