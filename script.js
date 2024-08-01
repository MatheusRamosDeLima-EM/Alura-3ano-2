const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
      enunciado:
        "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
      alternativas: [
        {
          texto: "Isso é assustador!",
          afirmacao: "Achou assustador pensar que máquinas agora poderiam mudar o mundo.",
        },
        {
          texto: "Isso é maravilhoso!",
          afirmacao: "Achou maravilhoso pensar que máquinas agora poderiam mudar o mundo.",
        },
      ],
    },
    {
      enunciado:
        "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
      alternativas: [
        {
          texto:
            "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
          afirmacao: "Percebeu que a IA consegue explicar termos complicados de forma simplificada e isso ajudou muito suas pesquisas sobre assuntos complexos.",
        },
        {
          texto:
            "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
          afirmacao: "Percebeu que a IA não consegue explicar termos complicados de forma simplificada e resolveu buscar o conhecimento necessário sem o uso de IA.",
        },
      ],
    },
    {
      enunciado:
        "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
      alternativas: [
        {
          texto:
            "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
          afirmacao: "Acredita que a IA irá melhorar a vida das pessoas através da criação de novas oportunidades de emprego e aperfeiçoamento das habilidades humanas.",
        },
        {
          texto:
            "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
          afirmacao: "Acredita que a IA irá piorar a vida das pessoas através da perda de novas oportunidades de emprego e desvalorização das habilidades humanas.",
        },
      ],
    },
    {
      enunciado:
        "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
      alternativas: [
        {
          texto:
            "Criar uma imagem utilizando uma plataforma de design como o Paint.",
          afirmacao: "Aborda a realização de trabalhos e projetos com o uso de ferramentas clássicas como Paint.",
        },
        {
          texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
          afirmacao: "Aborda a realização de trabalhos e projetos com o uso de adicional de IA com o uso de ferramentas como o ChatGPT.",
        },
      ],
    },
    {
      enunciado:
        "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
      alternativas: [
        {
          texto:
            "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
          afirmacao: "Acredita fielmente na IA e não percebe que ela pode apresentar erros apesar de um prompt bem feito.",
        },
        {
          texto:
            "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
          afirmacao: "Não confia completamente no uso da IA e sabe que ela pode apresentar erros, mesmo com o uso de tecnologia avançada.",
        },
      ],
    },
  ];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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

function mostraAlternativas(){
  for(const alternativa of perguntaAtual.alternativas){
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
      caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacoes + "";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
