// evento para logar no sistema
  var usuarios = {"login": "admin@tascom", "senha": "2022@tascom"};
  var submit = document.getElementById('logar');

  submit.addEventListener("click", function(e){
      e.preventDefault();
      var usuario = document.getElementById("email").value;
      var senha = document.getElementById("senha").value;

      if(usuarios.login === usuario || usuarios.senha === senha){
          window.location = "index.html";
}
      else
      {
          alert('Usuário ou senha inválidos.');
      }
 });

document.getElementById('btn-voltar').addEventListener("click", function(e){
    e.preventDefault(); 
    window.location = "index.html";
 });

//funções para botões da página-1
function next() {
    const el = document.getElementById(event.target.id.split("-")[1]);
    event.preventDefault();
    el.style.visibility = "hidden";
    const elp = document.getElementById((parseInt(event.target.id.split("-")[1])+1).toString());
    elp.style.visibility = "visible";
}

function back(){
    const el = document.getElementById(event.target.id.split("-")[1]);
    event.preventDefault();
    el.style.visibility = "hidden";
    const elp = document.getElementById((parseInt(event.target.id.split("-")[1])-1).toString());
    elp.style.visibility = "visible";
}

var arrayColaboradores; 
//função para cadastro 
function adicionarColaborador(){
     var arrayColaboradores = [];
    if(JSON.parse(localStorage.getItem('colaboradores')) != null){
        arrayColaboradores.push(JSON.parse(localStorage.getItem('colaboradores')));
    }
    var id = 1; 
    var nome = document.getElementById('nome').value;
    var dataNasc = document.getElementById('dataNasc').value;
    var idade = document.getElementById('idade').value;
    var nomeDaMae = document.getElementById('nomeDaMae').value;
    var rg = document.getElementById('rg').value;
    var orgaoEmissor = document.getElementById('orgaoEmissor').value;
    var cpf = document.getElementById('cpf').value;
    var nacionalidade = document.getElementById('nacionalidade').value;
    var endereco = document.getElementById('endereco').value;
    var bairro = document.getElementById('bairro').value;
    var cidade = document.getElementById('cidade').value;
    var cep = document.getElementById('cep').value;
    var uf = document.getElementById('uf').value;
    var celular = document.getElementById('celular').value;
    var contatoEmerg = document.getElementById('contatoEmerg').value;
    var email = document.getElementById('email').value;
    var funcao = document.getElementById('funcao').value;
    var formacao = document.getElementById('formacao').value;
    var numero = document.getElementById('numero').value;
    var especPrincipal = document.getElementById('principal').value;
    var especOutras = document.getElementById('outra').value;
    var empresa = document.getElementById('empresa').value;

    var colaborador = {id: id, nome: nome, dataNasc: dataNasc, idade: idade, nomeDaMae: nomeDaMae,
        rg: rg, orgaoEmissor: orgaoEmissor, cpf: cpf, nacionalidade: nacionalidade,
        endereco: endereco, bairro: bairro, cidade: cidade, cep: cep, uf: uf, celular: celular,
        contatoEmerg: contatoEmerg, email: email, funcao: funcao, formacao: formacao,
        numero: numero, especPrincipal: especPrincipal, especOutras: especOutras, empresa: empresa};

    arrayColaboradores.push(colaborador);
    var colaboradorJSON = JSON.stringify(arrayColaboradores);
    localStorage.setItem("colaboradores", colaboradorJSON);
    id++; 

    alert('Cadastro concluído!'); 
}

//função para cadastrar colaborador no localStorage
function pesquisarColaborador(){
    var pesquisar = document.getElementById('pesquisaInput').value.toLowerCase().join();
    var nomePesquisa = document.getElementById('nome').value;

    if(pesquisar == nomePesquisa){
        document.getElementById('nome').innerHTML = localStorage.getItem('nome');
    }else{
        alert('Usuário não cadastrado.');
    }
}

//evento para submeter formulário
const form = document.getElementById('formulario'); 
var formulario = form;
document.getElementById('btnEnviar').addEventListener('submit', function(){
    formulario.submit(); 
});

