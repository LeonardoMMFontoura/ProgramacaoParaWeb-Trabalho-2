const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']
let tempo = 80
let recording = false
let metronomeId = 0
const metronomeAudio = new Audio('sounds/metronome.mp3')

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})


document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}
const metronome = () => {
  setInterval(() => {
      metronomeAudio.currentTime = 0
      //metronomeAudio.play()
    },
    60000/tempo // execute the above code every 10ms
  )
}

function playMetronome(){
  metronomeAudio.currentTime = 0
  metronomeAudio.play()
}
function tempoToMS(){
  return 60000/tempo
}


function setTempo(){
  let tempoInput = document.getElementById("tempoInput").value;
  if(isNaN(tempoInput) || tempoInput < 30 || tempoInput > 240){
    alert("Please provide a valid tempo");
  }
  else{
    tempo = tempoInput;
    if(recording){
      clearInterval(metronomeId);
    }
    metronomeId = setInterval(playMetronome, tempoToMS())
    recording = true
    console.log("olá");
  }
  console.log(tempo);
}