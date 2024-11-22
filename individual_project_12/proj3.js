
// Array of Minecraft mod types.
var mods = ["Shaders", "Minimap", "Furniture", "Magic", "Adventure"];

// Function to check the mod type and give a recommendation using if-else statements
function checkMod() {
    var modInput = document.getElementById("mod").value;

    // If-else statements
    if (modInput.toLowerCase() === mods[0].toLowerCase()) {
        document.getElementById("modResult").innerHTML = "Shaders mods enhance the visual quality of Minecraft!";
    } else if (modInput.toLowerCase() === mods[1].toLowerCase()) {
        document.getElementById("modResult").innerHTML = "Minimap mods add a handy map to help you navigate the world!";
    } else if (modInput.toLowerCase() === mods[2].toLowerCase()) {
        document.getElementById("modResult").innerHTML = "Furniture mods allow you to add detailed furniture to your builds!";
    } else if (modInput.toLowerCase() === mods[3].toLowerCase()) {
        document.getElementById("modResult").innerHTML = "Magic mods introduce new abilities to your gameplay!";
    } else if (modInput.toLowerCase() === mods[4].toLowerCase()) {
        document.getElementById("modResult").innerHTML = "Adventure mods add new worlds, quests, and stories to explore!";
    } else {
        document.getElementById("modResult").innerHTML = "That mod type is rare or unknown. Try another!";
    }
}

// Switch statement for player's community role.
function checkCommunityRole() {
    var role = document.getElementById("role").value;

    // Switch statement
    switch (role.toLowerCase()) {
        case "builder":
            document.getElementById("roleResult").innerHTML = "As a builder, you focus on constructing amazing structures!";
            break;
        case "modder":
            document.getElementById("roleResult").innerHTML = "As a modder, you create custom content to enhance the game!";
            break;
        case "server admin":
            document.getElementById("roleResult").innerHTML = "As a server admin, you manage and maintain online Minecraft servers!";
            break;
        default:
            document.getElementById("roleResult").innerHTML = "Unknown role. Please enter a valid community role.";
    }
}
