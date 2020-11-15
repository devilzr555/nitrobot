const { token } = require("./config.json");
const discord = require("discord.js"); 
const client = new discord.Client({
  disableEveryone: true 
});

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

const { DiscordUNO } = require("discord-uno")
const discordUNO = new DiscordUNO("YELLOW");

client.on("ready", () => console.log("ready"));

client.on("message", async (message) => {

    if (message.content.toLowerCase() === ".creategame")
        await discordUNO.createGame(message);

    else if (message.content.toLowerCase() === ".join")
        await discordUNO.addUser(message); 

    else if (message.content.toLowerCase() === ".leave")
        await discordUNO.removeUser(message);

    else if (message.content.toLowerCase() === ".hand")
        await discordUNO.viewCards(message);

    else if (message.content.toLowerCase() === ".startgame")
        await discordUNO.startGame(message);

    else if (message.content.toLowerCase().startsWith(".play"))
        await discordUNO.playCard(message);

    else if (message.content.toLowerCase() === ".closegame") 
        await discordUNO.closeGame(message);

    else if (message.content.toLowerCase() === ".endgame") 
        await discordUNO.endGame(message);

    else if (message.content.toLowerCase() === ".draw") 
        await discordUNO.draw(message);

    else if (message.content.toLowerCase() === ".settings")
        await discordUNO.updateSettings(message);

    else if (message.content.toLowerCase() === ".viewsettings")
        await discordUNO.viewSettings(message);
        
    else if (message.content.toLowerCase().startsWith(".uno"))
        await discordUNO.UNO(message);

    else if (message.content.toLowerCase() === ".table") 
        await discordUNO.viewTable(message);
});

client.login(token);