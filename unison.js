const wa = window.AudioContext || window.webkitAudioContext;

const unison = 10

const oscs = new Array(3)

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
    oscs[0] = creatOsc(freq, 0);
    oscs[1] = creatOsc(freq, unison);
    oscs[2] = creatOsc(freq, -unison);
}
