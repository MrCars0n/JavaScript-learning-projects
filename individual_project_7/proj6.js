document.getElementById('minecraft-building-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    const formElements = this.elements;
    const username = formElements['minecraft-username'];
    const favoriteBlock = formElements['favorite-block'];
    const buildStyle = formElements['build-style'];
    const buildDate = formElements['build-date'];
    const buildRating = formElements['build-rating'];
    const agreed = formElements['agreed'];

    // Clear custom validity messages for all fields
    username.setCustomValidity('');
    favoriteBlock.setCustomValidity('');
    buildStyle.setCustomValidity('');
    buildDate.setCustomValidity('');
    buildRating.setCustomValidity('');
    agreed.setCustomValidity('');

    // Validation checking to make sure all the fields are filled out
    if (!username.value.trim()) {
        username.setCustomValidity('Please enter your Minecraft username.');
    } else if (username.value.trim().length < 3) {
        // Checking to make sure the username is valid length
        username.setCustomValidity('Username must be at least 3 characters long.');
    }

    if (!favoriteBlock.value.trim()) {
        favoriteBlock.setCustomValidity('Please enter your favorite block.');
    }

    if (!buildStyle.value) {
        buildStyle.setCustomValidity('Please select a building style.');
    }

    if (!buildDate.value) {
        buildDate.setCustomValidity('Please select the date of your favorite build.');
    }

    if (!buildRating.value) {
        buildRating.setCustomValidity('Please rate your favorite build.');
    }

    if (!agreed.checked) {
        agreed.setCustomValidity('You must agree to share your Minecraft building experiences.');
    }

    // Check for any validation errors
    if (!this.checkValidity()) {
        this.reportValidity();
        return;
    }

    // If all validations pass
    console.log("Form submitted successfully with the following data:", {
        username: username.value,
        favoriteBlock: favoriteBlock.value,
        buildStyle: buildStyle.value,
        buildDate: buildDate.value,
        buildRating: buildRating.value
    });

    document.getElementById('error-message').textContent = '';

    alert('Form submitted successfully!');
    this.reset();
});

// Add input event listeners to clear custom validity when user modifies input
document.querySelectorAll('#minecraft-building-form input, #minecraft-building-form select').forEach(element => {
    element.addEventListener('input', function() {
        this.setCustomValidity('');
    });
});
