// Image paths for the puzzle pieces
const imagePaths = ["images/puzzle1.png", "images/puzzle2.png", "images/puzzle3.png"];

// Select the puzzle container and drop area elements
const puzzleContainer = document.getElementById("puzzle-container");
const dropArea = document.getElementById("drop-area");

// Function to shuffle images once
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialize the puzzle pieces in random order
function initializePuzzle() {
    puzzleContainer.innerHTML = ""; // Clear any previous content
    dropArea.innerHTML = ""; // Clear drop area
    dropOrder = []; // Reset the drop order tracking array

    shuffle(imagePaths); // Shuffle the images array

    imagePaths.forEach((path) => {
        const img = document.createElement("img");
        img.src = path;
        img.dataset.correctOrder = path; // Store the correct order using the image path
        img.className = "puzzle-piece";
        img.draggable = true;
        img.addEventListener("dragstart", dragStart);
        puzzleContainer.appendChild(img);
    });
}

// Drag and drop functionality
let dropOrder = [];

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.dataset.correctOrder); // Use image path as identifier
}

dropArea.addEventListener("dragover", event => {
    event.preventDefault(); // Allow drop
});

dropArea.addEventListener("drop", event => {
    event.preventDefault();

    // Get the dropped image path and append the piece to the drop area
    const piecePath = event.dataTransfer.getData("text");
    const piece = Array.from(puzzleContainer.children).find(img => img.dataset.correctOrder === piecePath);

    if (piece && !dropArea.contains(piece)) {
        dropArea.appendChild(piece); // Append to the drop area
        dropOrder.push(piecePath);   // Track the path order for winner check
        setTimeout(checkCompletion, 0); // Check completion after DOM updates
    }
});

// Check if the puzzle is solved in the correct order
function checkCompletion() {
    const correctOrder = ["images/puzzle1.png", "images/puzzle2.png", "images/puzzle3.png"];
    if (dropOrder.length === correctOrder.length && dropOrder.every((path, index) => path === correctOrder[index])) {
        alert("Congratulations! You've solved the puzzle!");
    }
}

// Reset the puzzle to its initial state
function resetGame() {
    initializePuzzle();
}

// Run initializePuzzle once on page load
initializePuzzle();
