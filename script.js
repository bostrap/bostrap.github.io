let lilin = document.querySelectorAll('.lilin');
let ucapan = document.getElementById('ucapan');

// Deteksi suara
const audioContext = new AudioContext();
const analyser = audioContext.createAnalyser();
const microphone = audioContext.createMediaStreamSource(stream);

microphone.connect(analyser);

analyser.fftSize = 256;

const frequencyData = new Uint8Array(analyser.frequencyBinCount);

function update() {
 requestAnimationFrame(update);
 analyser.getByteFrequencyData(frequencyData);

 // Deteksi suara keras (tiupan)
 if (frequencyData[0] > 100) {
 lilin.forEach((lilin) => {
 lilin.style.height = '0px';
 });
 ucapan.innerHTML = 'Selamat Ulang Tahun!';
 setTimeout(() => {
 lilin.forEach((lilin) => {
 lilin.style.height = '50px';
 });
 ucapan.innerHTML = '';
 }, 3000);
 }
}

update();

// Izinkan akses mikrofon
navigator.mediaDevices.getUserMedia({ audio: true })
 .then((stream) => {
 // Gunakan stream audio
 })
 .catch((error) => {
 console.error('Izin akses mikrofon dibutuhkan.');
 });
