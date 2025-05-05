// Mendapatkan elemen canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Properti bola
const ball = {
    x: canvas.width / 2,  // Posisi awal x di tengah canvas
    y: canvas.height / 2, // Posisi awal y di tengah canvas
    radius: 30,           // Radius bola
    speed: 4,             // Kecepatan bola
    directionX: 1,        // Arah gerakan horizontal (1 = kanan)
    directionY: 0,        // Arah gerakan vertikal (0 = tidak bergerak vertikal)
    state: 'moveRight'    // Status gerakan bola
};

// Fungsi untuk menggambar bola
function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Menggambar bola putih
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
}

// Fungsi untuk menggerakkan bola
function moveBall() {
    // Menggerakkan bola berdasarkan state
    if (ball.state === 'moveRight') {
        ball.x += ball.speed;
        
        // Jika bola mencapai sisi kanan
        if (ball.x + ball.radius >= canvas.width) {
            ball.state = 'moveDown';
        }
    } else if (ball.state === 'moveDown') {
        ball.y += ball.speed;
        
        // Jika bola mencapai sisi bawah
        if (ball.y + ball.radius >= canvas.height) {
            ball.state = 'moveLeft';
        }
    } else if (ball.state === 'moveLeft') {
        ball.x -= ball.speed;
        
        // Jika bola mencapai sisi kiri
        if (ball.x - ball.radius <= 0) {
            // Menghilangkan bola
            ball.state = 'hidden';
            return;
        }
    }
    
    // Menggambar bola di posisi baru
    drawBall();
}

// Fungsi animasi
function animate() {
    if (ball.state !== 'hidden') {
        moveBall();
        requestAnimationFrame(animate);
    }
}

// Memulai animasi
animate();