// Lista de músicas
const musicas = [
  {
    nome: "Justin Timberlake - SexyBack",
    arquivo: "musicas/Justin Timberlake - SexyBack.mp3",
    capa: "capa/dance.gif"
  },
  {
    nome: "Timbaland - The Way I Are",
    arquivo: "musicas/Timbaland - The Way I Are.mp3",
    capa: "capa/tim.gif"
  },
  {
    nome: "Justin Timberlake - My Love",
    arquivo: "musicas/My Love.mp3",
    capa: "capa/love.gif"
  },
  {
    nome: "Post Malone - Motley Crew",
    arquivo: "musicas/Post Malone - Motley Crew.mp3",
    capa: "capa/race.gif"
  },
  {
    nome: "The Police - Every Breath You Take",
    arquivo: "musicas/The Police - Every Breath You Take.mp3",
    capa: "capa/police.gif"
  },
  {
    nome: "Justin Timberlake - What Goes Around",
    arquivo: "musicas/What Goes Around....mp3",
    capa: "capa/around.gif"
  },
  {
    nome: "Drake - Toosie Slide",
    arquivo: "musicas/Drake - Toosie Slide.mp3",
    capa: "capa/drake.gif"
  },
  {
    nome: "Creed - With Arms Wide Open",
    arquivo: "musicas/Creed - With Arms Wide Open.mp3",
    capa: "capa/creed.gif"
  },
  {
    nome: "Michael Jackson - Billie Jean",
    arquivo: "musicas/BILLIE JEAN (SWG Remastered Extended Mix).mp3",
    capa: "capa/mj.gif"
  },
  {
    nome: "The Weeknd, Swedish House Mafia - Sacrifice",
    arquivo: "musicas/The Weeknd, Swedish House Mafia - Sacrifice.mp3",
    capa: "capa/sacrifice.gif"
  },
  {
    nome: "Lady - Lionel Richie",
    arquivo: "musicas/Lady - Lionel.mp3",
    capa: "capa/lionel_richie.jpg"
  },
  {
    nome: "The Weeknd - Acquainted",
    arquivo: "musicas/06.- Acquainted.flac",
    capa: "capa/a.gif"
  },
  {
    nome: "The Weeknd - Can't Feel My Face",
    arquivo: "musicas/07.- Can't Feel My Face.flac",
    capa: "capa/face.gif"
  },
  {
    nome: "The Weeknd - I Feel It Coming (Feat. Daft Punk)",
    arquivo: "musicas/18.- I Feel It Coming (Feat. Daft Punk).flac",
    capa: "capa/feel.gif"
  },
  {
    nome: "Michael Bublé - Fever",
    arquivo: "musicas/05. Fever.flac",
    capa: "capa/fever.gif"
  },
  {
    nome: "Michael Jackson - Man in the Mirror",
    arquivo: "musicas/Michael Jackson - Man in the Mirror.mp3",
    capa: "capa/mirror.gif"
  },
  {
    nome: "Stevie Wonder - Higher Ground",
    arquivo: "musicas/Stevie Wonder - Higher Ground.mp3",
    capa: "capa/power.gif"
  },
  {
    nome: "Ne-Yo - Because Of You",
    arquivo: "musicas/Ne-Yo - Because Of You.mp3",
    capa: "capa/neyo.gif"
  },
  {
    nome: "Charles & Eddie - Would I Lie To You",
    arquivo: "musicas/Charles  Eddie - Would I Lie To You.mp3",
    capa: "capa/you.jpg"
  },
  {
    nome: "Drake - In My Feelings",
    arquivo: "musicas/Drake - In My Feelings [www.slider.kz].mp3",
    capa: "capa/1.gif"
  },
  {
    nome: "Stevie Wonder - Superstition",
    arquivo: "musicas/Stevie Wonder - Superstition [www.slider.kz].mp3",
    capa: "capa/stevie.gif"
  },
  {
    nome: "Michael Bublé - Feeling Good",
    arquivo: "musicas/Michael Bublé - Feeling Good [www.slider.kz].mp3",
    capa: "capa/michael.gif"
  },
  {
    nome: "Al Green - How Can You Mend a Broken Heart",
    arquivo: "musicas/Al Green - How Can You Mend a Broken Heart [www.slider.kz].mp3",
    capa: "capa/all.jpg"
  },
  {
    nome: "The Weeknd feat. Daft Punk - Starboy",
    arquivo: "musicas/The Weeknd feat. Daft Punk - Starboy [www.slider.kz].mp3",
    capa: "capa/star.gif"
  },
  {
    nome: "THRILLER - 35th Anniversary - MICHAEL JACKSON",
    arquivo: "musicas/THRILLER - 35th Anniversary (SWG Remastered Extended Mix) - MICHAEL JACKSON.mp3",
    capa: "capa/thriler.gif"
  },
  {
    nome: "SMOOTH CRIMINAL - MICHAEL JACKSON",
    arquivo: "musicas/SMOOTH CRIMINAL (SWG -2023- Extended Mix) MICHAEL JACKSON (Bad).mp3",
    capa: "capa/smoth.gif"
  },
  {
    nome: "Michael Jackson - Remember The Time",
    arquivo: "musicas/Michael Jackson - Remember The Time.mp3",
    capa: "capa/remember.gif"
  },
  {
    nome: "Michael Jackson - Break of Dawn",
    arquivo: "musicas/Michael Jackson - Break of Dawn.mp3",
    capa: "capa/amanhecer.gif"
  },
  {
    nome: "Michael Jackson - Al Capone",
    arquivo: "musicas/Michael Jackson - Al Capone.mp3",
    capa: "capa/terno.gif"
  },
  {
    nome: "Michael Jackson - Heaven Can Wait",
    arquivo: "musicas/Michael Jackson - Heaven Can Wait.mp3",
    capa: "capa/girl.gif"
  },
  {
    nome: "Freddie Mercury & Montserrat Caballé - How Can I Go On",
    arquivo: "musicas/Freddie Mercury & Montserrat Caballé - How Can I Go On.mp3",
    capa: "capa/fred.jpg"
  },

  {
    nome: "Andrea Boceli & Celine Dion - The Prayer",
    arquivo:" musicas/Andrea Boceli & Celine Dion - The Prayer.mp3",
    capa: "capa/celine.gif"
  },
  {
    nome: "Tevin Campbell - Can We Talk",
    arquivo:"musicas/Tevin Campbell - Can We Talk.mp3",
    capa: "capa/tevin.gif"
  },
   
  {
    nome: "Whitney Houston - It s Not Right But It s Okay",
    arquivo:"musicas/Whitney Houston - It s Not Right But It s Okay.mp3",
    capa: "capa/whiteney.gif"
  },

  {
    nome: "Whitney Houston - I Have Nothing.mp3",
    arquivo:"musicas/Whitney Houston - I Have Nothing.mp3",
    capa: "capa/w.gif"
  },
 
  {
    nome: "Michael Jackson - Another Part Of Me",
    arquivo: "musicas/Michael Jackson - Another Part Of Me.mp3",
    capa: "capa/part.gif"
  },

  {
    nome: "Jermaine Jackson - Do What You Do",
    arquivo: "musicas/Jermaine Jackson - Do What You Do.mp3",
    capa: "capa/Jermaine-Jackson.jpg"
  },

  {
    nome: "Céline Dion - Immortalityft. Bee Gees.mp3",
    arquivo: "musicas/Céline Dion - Immortalityft. Bee Gees.mp3",
    capa: "capa/bee.jpg"
  },

  {
    nome: "Michael Jackson - You Are Not Alone.mp3",
    arquivo: "musicas/Michael Jackson - You Are Not Alone.mp3",
    capa: "capa/alone.gif"
  },



  {
    nome: "Desiigner - Panda",
    arquivo: "musicas/Desiigner - Panda .mp3",
    capa: "capa/panda.jpg"
  },

  {
    nome: "Gino Vannelli - Hurts To Be In Love",
    arquivo: "musicas/Gino Vannelli - Hurts To Be In Love.mp3",
    capa: "capa/gino.jpg"
  },

  {
    nome: "Brian McKnight - Back At One",
    arquivo: "musicas/Brian McKnight - Back At One.mp3",
    capa: "capa/one.gif"
  },


  {
    nome: "Whitney Houston - I Look to You",
    arquivo: "musicas/Whitney Houston - I Look to You.mp3",
    capa: "capa/q.gif"
  },


  {
    nome: "Whitney Houston - Run To You",
    arquivo: "musicas/Whitney Houston - Run To You.mp3",
    capa: "capa/i.gif"
  },

  {
    nome: "Future - Life Is Good ft. Drake",
    arquivo: "musicas/Future - Life Is Good ft. Drake.mp3",
    capa: "capa/future.gif"
  },

];



// Array com os caminhos das imagens de fundo
const imagensFundo = [
  'Fundo do site/luz.gif',
  'Fundo do site/sol.gif',
  'Fundo do site/tunel.gif',
  'Fundo do site/vocal.gif',



  // Adicione mais imagens conforme necessário
];

let indiceImagemAtual = 0;

// Função para trocar o fundo
function trocarFundo() {
  const fundo = document.querySelector('.background');
  fundo.style.backgroundImage = `url('${imagensFundo[indiceImagemAtual]}')`;
  indiceImagemAtual = (indiceImagemAtual + 1) % imagensFundo.length; // Avança para a próxima imagem
}

// Troca o fundo a cada 30 segundos
setInterval(trocarFundo, 30000);

// Inicializa com a primeira imagem
trocarFundo();

let musicaAtual = 0;
const audio = new Audio();
const capaElement = document.getElementById('capa');
const nomeMusicaElement = document.getElementById('nome-musica');
const playPauseButton = document.getElementById('play-pause');
const volumeControl = document.getElementById('volume');

// Função para carregar a música
function carregarMusica(index) {
  const musica = musicas[index];
  audio.src = musica.arquivo;
  capaElement.src = musica.capa;
  nomeMusicaElement.textContent = musica.nome;

  // Verifica se a música está pronta para ser reproduzida
  audio.addEventListener('loadeddata', () => {
    console.log(`Música "${musica.nome}" carregada com sucesso!`);
  });

  // Em caso de erro ao carregar a música
  audio.addEventListener('error', (e) => {
    console.error(`Erro ao carregar a música "${musica.nome}":`, e);
  });
}

// Função para tocar ou pausar a música
function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = '⏸'; // Ícone de pausa
  } else {
    audio.pause();
    playPauseButton.textContent = '⏯'; // Ícone de play
  }
}

// Função para avançar para a próxima música
function proximaMusica() {
  musicaAtual = (musicaAtual + 1) % musicas.length;
  carregarMusica(musicaAtual);
  audio.play();
  playPauseButton.textContent = '⏸'; // Ícone de pausa
}

// Função para voltar para a música anterior
function musicaAnterior() {
  musicaAtual = (musicaAtual - 1 + musicas.length) % musicas.length;
  carregarMusica(musicaAtual);
  audio.play();
  playPauseButton.textContent = '⏸'; // Ícone de pausa
}

// Função para ajustar o volume
function ajustarVolume() {
  audio.volume = volumeControl.value;
}

// Iniciar a primeira música
carregarMusica(musicaAtual);

// Eventos dos botões
document.getElementById('anterior').addEventListener('click', musicaAnterior);
document.getElementById('proxima').addEventListener('click', proximaMusica);
playPauseButton.addEventListener('click', togglePlayPause);

// Evento para ajustar o volume
volumeControl.addEventListener('input', ajustarVolume);

// Quando a música terminar, avançar para a próxima
audio.addEventListener('ended', () => {
  proximaMusica();
});