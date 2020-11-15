const discord = require("discord.js");

module.exports = {
name: "invite",
  description: "Get the information about the bot",
  category: "contact",
  usage: "invite",
  run: async (bot, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle("**__Invite Me!__ <a:blobshoot:764923422827610152>**")
        .setColor(`#RANDOM`)
        .addField("**Invite Link**", '[Click Here!](https://discord.com/oauth2/authorize?client_id=762926854012534794&scope=bot&permissions=2146958847)', true)
        .addField("**My Support Server**", '[Click Here!](https://discord.gg/fNSnR9R)', true)
        .setDescription('**A Multipurpose Bot which is very easy to use!**')
        .setFooter("Made With ❤️ ItzDevil | Acex Family")
    
    
    message.channel.send(embed)
    
    
    
  }

}