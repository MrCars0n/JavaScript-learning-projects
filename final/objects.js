// Constructor function for a Minecraft Build
function MinecraftBuild(username, favoriteBlock, buildStyle, buildDate, buildRating) {
    this.username = username;
    this.favoriteBlock = favoriteBlock;
    this.buildStyle = buildStyle;
    this.buildDate = buildDate;
    this.buildRating = buildRating;
}

// Method to display build details in a formatted string
MinecraftBuild.prototype.displayBuild = function () {
    return `${this.username} built using ${this.favoriteBlock} in a ${this.buildStyle} style on ${this.buildDate}, 
    and rated the build ${this.buildRating}/10.`;
};

// Method to validate build rating
MinecraftBuild.prototype.isValidRating = function () {
    return this.buildRating >= 1 && this.buildRating <= 10;
};

// Additional method to check if all necessary fields are filled
MinecraftBuild.prototype.isComplete = function () {
    return this.username && this.favoriteBlock && this.buildStyle && this.buildDate && this.buildRating;
};

// This object could be reused in other applications to manage and display Minecraft build data.