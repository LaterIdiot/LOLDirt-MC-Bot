require("dotenv").config();
const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
	host: "mc.hypixel.net", // optional
	username: process.env.EMAIL, // email and password are required only for
	password: process.env.PASSWORD, // online-mode=true servers
	version: "1.8.9", // false corresponds to auto version detection (that's the default), put for example "1.8.8" if you need a specific version
	auth: process.env.AUTH, // optional; by default uses mojang, if using a microsoft account, set to 'microsoft'
});

bot.on("chat", function (username, message) {
	if (username === bot.username) return;
	bot.chat(message);
});

// Log errors and kick reasons:
bot.on("kicked", (reason, loggedIn) => console.log(reason, loggedIn));
bot.on("error", (err) => console.log(err));

bot.on("spawn", () => {
	console.log("I am ready!");
});
