const wa = window.AudioContext || window.webkitAudioContext;

const random = (min, max) => Math.random() * (max - min) + min;

const unison = random(5, 15);

const oscs = new Array(3)

const baseFreq = 442

const creatOsc= (freq, detune) => {
    const osc = wa.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = freq;
    osc.detune.value = detune;
    osc.connect(wa.destination);
    osc.start();
    return osc;
}

const noteOn = (note) => {
    const freq = note;
    oscs[0] = creatOsc(baseFreq, 0);
    oscs[1] = creatOsc(baseFreq, unison);
    oscs[2] = creatOsc(baseFreq, -unison);
}
