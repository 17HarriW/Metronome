// Metronome
console.log("Setting up metronome");
const btnDecrease = document.getElementById("btnDecreaseBPM");
const btnIncrease = document.getElementById("btnIncreaseBPM");
const bpmInput = document.getElementById("txtBPM");
const btnStartStop = document.getElementById("btnStartStop");
const MAX_BPM = 120;
const MIN_BPM = 50;
var running = false;
// Store the beats per minute
var bpm = 60;
var callback = undefined;


btnStartStop.addEventListener("click", function (e) {
    running = !running;
    btnStartStop.value = running ? "Stop" : "Start";

    if (running) {
        setSpeedAndStart();
    }
});

function setSpeedAndStart() {
    clearInterval(callback);
    var ms = 60000 / bpm;
    callback = setInterval(onTick, ms);
}

function onTick() {
    console.log("Tick");
}

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
    updateBPM();
}

btnIncrease.onclick = function (e) {
    bpm += 5;
    updateBPM();
}

function updateBPM() {
    // Range check
    if (bpm > MAX_BPM) {
        bpm = MAX_BPM
    }
    else if (bpm < MIN_BPM) {
        bpm = MIN_BPM
    }
    bpmInput.value = bpm;
    if (running) {
        setSpeedAndStart();
    }
}