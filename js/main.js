/* EVENTO DO BOTAO QUE MUDA A COR DO PLANO DE FUNDO */
document.querySelector('.ball').addEventListener('click', (e)=>{
    e.target.classList.toggle('ball-move');
    document.body.classList.toggle('dark');
  });  


  


  /* EVENTO PARA ATIVAR O EFEITO SCROLL NO TEXTO DE HABILIDADES E SOBRE MIM */ 
  const reveals = document.querySelectorAll('.reveal');

  window.addEventListener('scroll', () => {
    for (let el of reveals) {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    }
  });     





 /* EVENTO DE ANIMAÇÃO NOS PROJETOS */
const projetos = document.querySelectorAll('.projeto');
let index = 0;
let intervalHover;
let hoverAtivo = true;

function ativarHoverAutomatico() {
  if (hoverAtivo) {
    // Remove o hover de todos os projetos
    projetos.forEach((projeto) => {
      projeto.classList.remove('auto-hover');
    });

    // Adiciona o hover no projeto atual
    projetos[index].classList.add('auto-hover');

    // Avança para o próximo projeto
    index = (index + 1) % projetos.length;
  }
}

// Função para interromper o efeito de hover
function interromperHover() {
  hoverAtivo = false;
  clearInterval(intervalHover);
}

// Função para retomar o efeito de hover
function retomarHover() {
  hoverAtivo = true;
  intervalHover = setInterval(ativarHoverAutomatico, 1000); // Troca a cada 1 segundo
}

// Inicia o loop do carrossel de hover
intervalHover = setInterval(ativarHoverAutomatico, 1000);

// Se você quiser também parar o loop quando o mouse entra ou sai da área do projeto
projetos.forEach((projeto) => {
  projeto.addEventListener('mouseenter', interromperHover);
  projeto.addEventListener('mouseleave', retomarHover);
});





  /* CARROSSEL DE FEEDBACKS */
  const feedbacks = document.querySelectorAll('.feedback');
  const btnEsquerda = document.querySelector('.seta.esquerda');
  const btnDireita = document.querySelector('.seta.direita');

  let currentIndex = 0;
  let intervalo;

  function mostrarFeedback(index) {
    feedbacks.forEach(fb => fb.classList.remove('active'));
    feedbacks[index].classList.add('active');
  }

  function proximoFeedback() {
    currentIndex = (currentIndex + 1) % feedbacks.length;
    mostrarFeedback(currentIndex);
  }

  function anteriorFeedback() {
    currentIndex = (currentIndex - 1 + feedbacks.length) % feedbacks.length;
    mostrarFeedback(currentIndex);
  }

  btnDireita.addEventListener('click', () => {
    proximoFeedback();
    reiniciarIntervalo();
  });

  btnEsquerda.addEventListener('click', () => {
    anteriorFeedback();
    reiniciarIntervalo();
  });

  function reiniciarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(proximoFeedback, 2000);
  }

  intervalo (setInterval(proximoFeedback, 1000));

    feedbacks.forEach((feedback) => {
    feedback.addEventListener('mouseenter', interromperFeedback);
    feedback.addEventListener('mouseleave', retomarFeedback);
  }
);

intervalo (setInterval(proximoFeedback, 1000));

function interromperHover() {
  hoverAtivo = true;
  clearInterval(intervalHover);
}