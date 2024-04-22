/*const alunos = ['João', 'Maria', 'José', 'Antônio', 'Ana'];

alunos.push('Carlos');
alunos.unshift('Mariana');

for(conn of alunos){
    console.log(conn);
}*/

function criaPessoa(nome,sobrenome,idade){//Construtor de objetos
    if(typeof nome !== 'string' || typeof sobrenome !== 'string' || typeof idade !== 'number'){
        throw new Error('Os valores informados não são válidos');   //difernte de java ele precisa ter um if controlando as entradas dos dadoos;
    }   
    return{
        nome : nome,
        sobrenome : sobrenome,
        idade : idade
    };
}

const pessoa1 = criaPessoa('João', 'Silva','dois');

console.log(pessoa1);