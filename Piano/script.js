const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']
let tempo = 80
let metronomeId = 0
let currentRecording = ""
let stopPlaying = false
let recordings = [null,null,null,null,null]
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
  if(recordings[0]!=null && recordings[1]!=null && recordings[2]!=null && recordings[3]!=null && recordings[4]!=null){
    alert("All recording slots are full. Please delete one before continuing")
    return
  }
  disableRecordingButtons()
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
  console.log(currentRecording)
}
function stopRecording(){
  clearInterval(metronomeId)
  for(let i = 0; i<=4; i++){
    if(recordings[i]==null){
      console.log(currentRecording)
      recordings[i] = currentRecording
      currentRecording = ""
      break
    }
  }
  document.getElementById("start").disabled = false
  document.getElementById("stop").disabled = true
  enableRecordingButtons()
}

function enableRecordingButtons(){

  for(let i = 1;i<=5;i++){
    if(recordings[i-1]!=null){
      document.getElementById(`recording${i.toString()}`).disabled = false
      document.getElementById(`deleteRecording${i.toString()}`).disabled = false
    }
  }
}
function disableRecordingButtons(){
  for(let i = 1;i<=5;i++){
    document.getElementById(`recording${i.toString()}`).disabled = true
    document.getElementById(`deleteRecording${i.toString()}`).disabled = true
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function playRecording(recordingNum){
  disableRecordingButtons()
  document.getElementById("stopPlayback").disabled = false
  recording = recordings[recordingNum-1]
  console.log(recording)
  notes = recording.split("\n")
  bpm = notes[0]
  for(let i = 1; i<notes.length; i++){
    let audio = new Audio(`sounds/${notes[i]}.mp3`)
    audio.play()
    await sleep(tempoToMS(bpm))
    if(stopPlaying){
      enableRecordingButtons()
      document.getElementById("stopPlayback").disabled = true
      stopPlaying = false
      return
    }
  }
  document.getElementById("stopPlayback").disabled = true
  enableRecordingButtons()
  return
}
function stopPlayback(){
  stopPlaying = true
}

function deleteRecording(num){
  recordings[num-1] = null
  disableRecordingButtons()
  enableRecordingButtons()
}