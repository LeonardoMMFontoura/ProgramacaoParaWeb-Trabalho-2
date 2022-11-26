const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']
let tempo = 80
let metronomeId = 0
let currentRecording = ""
let recordings = []
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
  currentRecording = currentRecording.concat(noteAudio.id.toString()).concat("\n")
  noteAudio.currentTime = 0.2
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}

function playMetronome(){
  metronomeAudio.currentTime = 0
  metronomeAudio.play()
}
function tempoToMS(){
  return 60000/tempo
}


function startRecording(){
  let tempoInput = document.getElementById("tempoInput").value;
  if(isNaN(tempoInput) || tempoInput < 30 || tempoInput > 240){
    alert("Please provide a valid tempo");
  }
  else{
    document.getElementById("start").disabled = true
    document.getElementById("stop").disabled = false
    tempo = tempoInput;
    metronomeId = setInterval(playMetronome, tempoToMS())
    tempoString = tempo.toString();
    currentRecording = currentRecording.concat(tempoString).concat("\n")
  }
  console.log(currentRecording);
}
function stopRecording(){
  clearInterval(metronomeId)
  console.log(currentRecording)
  recordings.push(currentRecording)
  currentRecording = ""
  document.getElementById("start").disabled = false
  document.getElementById("stop").disabled = true
}