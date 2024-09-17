let images = [
    {src: "images/image1.jpg", answer: "France"},
    {src: "images/image2.jpg", answer: "Italy"},
    {src: "images/image3.jpg", answer: "Japan"},
    // Add more images and answers as you like
];

let currentImageIndex = 0;
let score = 0;

function checkAnswer() {
    let guess = document.getElementById('guessInput').value.trim().toLowerCase();
    let correctAnswer = images[currentImageIndex].answer.toLowerCase();

    if (guess === correctAnswer) {
        document.getElementById('message').textContent = "Correct!";
        score++;
        document.getElementById('score').textContent = score;
        document.getElementById('nextBtn').style.display = 'inline';
    } else {
        document.getElementById('message').textContent = "Wrong! Try again.";
    }
}

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Reset to first image
    }

    document.getElementById('image').src = images[currentImageIndex].src;
    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('nextBtn').style.display = 'none';
}
