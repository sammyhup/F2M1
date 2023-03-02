const fs = require('fs');

/*fs.writeFile('./arquivo.json', '{ "nome": "Filipe" }', (erro) => {

  if(erro){
    return console.log('Ocorreu um erro');
  }

  console.log('Arquivo criado/escrito com sucesso!');
});*/

var data = fs.readFileSync('./arquivo.json', 'utf-8');

var arquivo = JSON.parse(data);

console.log(data);
console.log(arquivo);

var pessoas = arquivo.pessoas;

pessoas.push({nome: 'Marcelo', idade: 41});

console.log(pessoas);

arquivo = JSON.stringify({pessoas: pessoas});

fs.writeFile('./arquivo.json', arquivo, (erro) => {

  if(erro){
    return console.log('Ocorreu um erro');
  }

  console.log('Arquivo atualizado com sucesso!');
});

