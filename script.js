let atual = 0;
let perguntaAtual;

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
let atual = 0;
Quero participar

let perguntaAtual;

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}
function mostraAlternativas() {}

mostraPergunta();
const alternativa
(const alternativa of perguntaAtual.alternativas)
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
    }
  }
  function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
    }
  }
  function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa;
    }
  }
  function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = do
Quero participar
 cument.createElement("button");
      botaoAlternativas.textContent = alternativa;
      caixaAlternativas.appendChild(botaoAlternativas);
    }
  }
  botao.addEventListener("click", function () {
    respostaSelecionada(opcao);
  });
  botao.addEventListener("click", () => respostaSelecionada(opcao));
  function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraPergunta();
  }
  function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacoes;
    atual++;
    mostraPergunta();
  }
  let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
  }
  var botaoDescobrir = document.getElementById('descobrir');

function mostrarFato() {
    alert("O elefante é o maior animal terrestre!");
}

botaoDescobrir.addEventListener("clicar", mostrarFato);
botao.______ = opcao.texto;
botao.__________('click', () => cafeSelecionado(opcao));
containerDeOpcoes._________(botao);
function mostraPergunta() {
    if (atual >= perguntas.length) {
      mostraResultado();
      return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
  }
  function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
  }
  let historiaFinal = "";
  function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
  }
  