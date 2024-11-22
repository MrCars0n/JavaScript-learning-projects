// Array of server information
const servers = [
    { name: "ShotBow", address: "play.shotbow.net" },
    { name: "LemonCloud", address: "mp.lemoncloud.net" },
    { name: "MineHut", address: "minehut.com" },
    { name: "OPBlocks", address: "fun.opblocks.com" }
];

// Function to fetch server status and update HTML
async function fetchServerStatus() {
    const serverStatusDiv = document.getElementById("serverStatus");
    serverStatusDiv.innerHTML = ""; // Clear existing content

    for (const server of servers) {
        try {
            // Construct API URLs for server status and icon
            const apiUrl = `https://api.mcstatus.io/v2/status/java/${server.address}`;
            const iconUrl = `https://api.mcstatus.io/v2/icon/${server.address}`;

            // Fetch server data
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error(`Error: ${response.status}`);
            const data = await response.json();

            // Server info layout with icon
            const serverInfo = document.createElement("div");
            serverInfo.classList.add("server-info");

            serverInfo.innerHTML = `
                <img src="${iconUrl}" alt="${server.name} Icon" class="server-icon" />
                <div class="server-details">
                    <h3>${server.name}</h3>
                    <p><strong>Status:</strong> ${data.online ? "Online" : "Offline"}</p>
                    <p><strong>Players:</strong> ${data.players.online}/${data.players.max}</p>
                </div>
            `;
            serverStatusDiv.appendChild(serverInfo);

        } catch (error) {
            console.error("Error fetching server data:", error);

            // Offline status with default icon if error occurs
            const serverInfo = document.createElement("div");
            serverInfo.classList.add("server-info");
            serverInfo.innerHTML = `
                <img src="default_icon.png" alt="Default Icon" class="server-icon" />
                <div class="server-details">
                    <h3>${server.name}</h3>
                    <p><strong>Status:</strong> Offline</p>
                </div>
            `;
            serverStatusDiv.appendChild(serverInfo);
        }
    }
}

// Load server status on page load
window.onload = fetchServerStatus;