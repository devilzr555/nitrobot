const discord = require("discord.js");

module.exports = {
name: "about",
  description: "Get the information about the bot",
  category: "info",
  usage: "about",
  run: async (bot, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle("About Me")
    .setColor("FFA500")
    .setFooter(`Team Acex | ItzDevil#9741`)
    .addField("⚙️Function", '**Im a multipurpose bot which can be used in many ways**', true)
    .addField("😀Founder", '**My Founder is ItzDevil**', true)
    .addField("⚒️Developers", '**My main dev is ItzDevil **', true)
    .addField("Bot Staff", '**Killer are my staff member**', true)
    
    
    message.channel.send(embed)
    
    
    
  }

}