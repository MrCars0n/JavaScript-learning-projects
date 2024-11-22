// Function to add or update a URL query parameter without removing existing parameters
function appendURLParameter(param, value) {
    const url = new URL(window.location.href);
    url.searchParams.set(param, value); // Adds or updates the parameter
    window.history.replaceState({}, "", url); // Replace current history state with updated URL
    setPreferencesFromQuery(); // Ensure cookies are updated with new values
}

// Function to parse URL query strings for preferences and store them in cookies
function setPreferencesFromQuery() {
    const params = new URLSearchParams(window.location.search);

    // Retrieve 'mod' and 'role' preferences from query strings
    const mod = params.get('mod');
    const role = params.get('role');

    // Store in cookies if values are provided
    if (mod) {
        document.cookie = `preferredMod=${mod}; path=/; max-age=31536000`; // Cookie lasts 1 year
        document.getElementById("modResult").innerText = `Preferred Mod: ${mod}`;
    }

    if (role) {
        document.cookie = `preferredRole=${role}; path=/; max-age=31536000`; // Cookie lasts 1 year
        document.getElementById("roleResult").innerText = `Community Role: ${role}`;
    }
}

// Function to retrieve and display preferences from cookies
function loadPreferencesFromCookies() {
    const cookies = document.cookie.split("; ");
    let mod = "";
    let role = "";

    // Loop through cookies to find mod and role values
    cookies.forEach(cookie => {
        const [key, value] = cookie.split("=");
        if (key === "preferredMod") mod = value;
        if (key === "preferredRole") role = value;
    });

    // Display preferences if cookies are found
    if (mod) {
        document.getElementById("modResult").innerText = `Preferred Mod (from cookie): ${decodeURIComponent(mod)}`;
    }
    if (role) {
        document.getElementById("roleResult").innerText = `Community Role (from cookie): ${decodeURIComponent(role)}`;
    }
}

// Functions to handle button clicks for mod and role
function checkMod() {
    const mod = document.getElementById("mod").value;
    if (mod) {
        appendURLParameter('mod', mod);
    }
}

function checkCommunityRole() {
    const role = document.getElementById("role").value;
    if (role) {
        appendURLParameter('role', role);
    }
}

// Explanation of security considerations
/*
Storing user preferences in cookies requires careful attention to security. Cookies are inherently vulnerable to theft via cross-site scripting (XSS) attacks. 
To mitigate this, it's crucial to ensure the site sanitizes and validates all user input before using it, even for simple preferences. 
Additionally, while HTTP-only and Secure flags enhance cookie security, the former is less applicable here since JavaScript needs access to cookies. 
Using Content Security Policy (CSP) headers can further protect against XSS by restricting external scripts.
*/

// Initialize preferences on page load
setPreferencesFromQuery();
loadPreferencesFromCookies();
