// Mendapatkan elemen-elemen
const secondElement = document.querySelector('.second');
const millisecondElement = document.querySelector('.millisecond');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let milliseconds = 0;
let seconds = 0;
let timer = null;

// Fungsi untuk memperbarui tampilan timer
function updateDisplay() {
    // Format angka dengan leading zero
    const formattedMilliseconds = milliseconds.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(3, '0');
    
    millisecondElement.textContent = formattedMilliseconds;
    secondElement.textContent = formattedSeconds;
}

// Fungsi untuk menjalankan timer
function runTimer() {
    milliseconds++;
    
    // Jika millisecond mencapai 100, tambah second
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    
    updateDisplay();
}

// Event listener untuk tombol Start
startButton.addEventListener('click', function() {
    if (!timer) {
        timer = setInterval(runTimer, 10); // Update setiap 10ms (untuk simulasi 100 milisecond)
    }
});

// Event listener untuk tombol Stop
stopButton.addEventListener('click', function() {
    clearInterval(timer);
    timer = null;
});

// Event listener untuk tombol Reset
resetButton.addEventListener('click', function() {
    clearInterval(timer);
    timer = null;
    milliseconds = 0;
    seconds = 0;
    updateDisplay();
});

// Initialize display
updateDisplay();