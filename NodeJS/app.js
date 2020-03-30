let filesystem = require('fs');
let moment = require ('moment');

const superHeroes = require('./superHeroes') //./ serve para indicar que é um pacote que nós criamos
// recomenda-se usar index pois o arquivo ja o procura de forma automática, assim nbçã
let dados = filesystem.readFileSync(__dirname+'/dados.txt', 'utf-8');
let data = moment().format('LLLL')

console.log(dados);
console.log(data);
console.log(superHeroes);

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080