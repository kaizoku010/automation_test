const fs = require("fs");
const path = require("path");

// Path to the file you want to update
const filePath = path.join(__dirname, "daily_update.txt");

// Append the current date and time to the file
const updateText = `Updated on: ${new Date().toISOString()}\n`;

fs.appendFileSync(filePath, updateText, "utf8");
console.log("File updated successfully.");
