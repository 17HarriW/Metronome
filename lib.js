// Metronome
console.log("Setting up metronome");
const btnDecrease = document.getElementById("btnDecreaseBPM");
const btnIncrease = document.getElementById("btnIncreaseBPM");
const bpmInput = document.getElementById("txtBPM");

// Store the beats per minute
var bpm = 60;

// Add event handlers
bpmInput.onchange = function (e) {
    bpm = parseInt(bpmInput.value);
    if (isNaN(bpm)) {
        bpm = 50;
    }
    console.log(bpm);
}

btnDecrease.onclick = function (e) {
    bpm -= 5;
}