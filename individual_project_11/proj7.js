// Array to hold selected minigames
let selectedModes = [];

// Function to add a new minigame to the dropdown
function addMinigame() {
    const newMinigame = document.getElementById("newMode").value.trim();
    if (newMinigame !== "") {
        // Add new minigame to the select element
        const modesSelect = document.getElementById("modes");
        const newOption = document.createElement("option");

        // REQUIREMENT 2: Regular expression validation for minigame name input
        newOption.value = newMinigame.toLowerCase().replace(/\s+/g, '-'); // Ensure value is lowercase and hyphenated
        newOption.text = newMinigame; // Display with full name and spaces
        modesSelect.add(newOption);

        // Clear the input field
        document.getElementById("newMode").value = "";
    }
}

// REQUIREMENT 1: Function to handle selection/deselection of minigames
function handleMinigameSelection() {
    const modesSelect = document.getElementById("modes");

    // Get the selected options
    selectedModes = Array.from(modesSelect.options)
        .filter(option => option.selected)
        .map(option => option.text); // Use option.text to get the full minigame name (including spaces)

    // Display the selected minigames
    document.getElementById("selectedModes").innerHTML = "Selected Minigames: " + selectedModes.join(", ");
}

// REQUIREMENT 1: Function to delete unselected minigames from the dropdown once form is submitted
function deleteUnselectedMinigames() {
    const modesSelect = document.getElementById("modes");

    // Loop through all the options and remove the unselected ones
    for (let i = modesSelect.options.length - 1; i >= 0; i--) {
        if (!modesSelect.options[i].selected) {
            modesSelect.remove(i);
        }
    }
}

// Function to calculate the total hours played in a year
function calculateHours() {
    // Retrieve the user's name
    const userName = document.getElementById("name").value;

    // Retrieve the number of hours played per week
    const hoursPerWeek = document.getElementById("hours").value;

    // Check if at least one minigame is selected
    if (selectedModes.length === 0) {
        alert("Please select at least one minigame.");
        return false;
    }

    // Check if a file has been uploaded
    const fileInput = document.getElementById("fileInput");
    if (!fileInput.files.length) {
        alert("Please upload a gameplay data file.");
        return false;
    }

    // Delete unselected minigames
    deleteUnselectedMinigames();

    // Calculate the total hours played in a year (52 weeks)
    const yearlyHours = hoursPerWeek * 52;

    // Display the result to the user
    document.getElementById("result").innerHTML = `${userName}, you play Minecraft for approximately ${yearlyHours} hours per year!`;

    // Alert success message
    alert("Form submitted successfully!");

    // Make the hidden elements visible after form submission
    document.getElementById('result').style.display = 'block';
    document.getElementById('selectedModes').style.display = 'block';
    document.getElementById('fileContent').style.display = 'block';

    // Scroll to the bottom of the page after form submission
    window.scrollTo(0, document.body.scrollHeight);

    // Prevent form submission
    return false;
}

// REQUIREMENT 3: Function to handle file upload and display content
function handleFileUpload() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("fileContent").innerHTML = "File Content: <br>" + e.target.result;
        };
        reader.readAsText(file);
    }
}

// Function to trigger validation on form submit (if necessary)
document.querySelector("form").addEventListener("submit", function(event) {
    const nameInput = document.getElementById("name");

    // Trigger the custom validation message if the name field is invalid
    if (!nameInput.checkValidity()) {
        nameInput.reportValidity(); // Show the validation message
        event.preventDefault(); // Prevent form submission if invalid
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("modes").addEventListener("change", handleMinigameSelection);
    document.getElementById("fileInput").addEventListener("change", handleFileUpload);
});
