// Handling form submission and using MinecraftBuild object
document.getElementById('minecraft-building-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Capture form input values
    let username = event.target['minecraft-username'].value;
    let favoriteBlock = event.target['favorite-block'].value;
    let buildStyle = event.target['build-style'].value;
    let buildDate = event.target['build-date'].value;
    let buildRating = event.target['build-rating'].value;

    // Create a new MinecraftBuild object
    let newBuild = new MinecraftBuild(username, favoriteBlock, buildStyle, buildDate, buildRating);

    // Validate build rating and check if form is complete
    if (!newBuild.isValidRating()) {
        document.getElementById('error-message').textContent = "Please enter a rating between 1 and 10.";
        return;
    }

    if (!newBuild.isComplete()) {
        document.getElementById('error-message').textContent = "Please fill out all the fields.";
        return;
    }

    // Display the build details
    document.getElementById('error-message').textContent = "";
    alert(newBuild.displayBuild());
});
