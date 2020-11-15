const discord = require("discord.js")

module.exports = {
    name: "howsmart",
    aliases: ["howsmart"],

    run: async(bot, message, args) => {

        let random = (Math.floor(Math.random() * Math.floor(100)));
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!user) return message.channel.send("Mention a user! Dumb Dumb")



        const embed = new discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Smart Meter")
            .setDescription(` This guy ${user} is ${random}% Smart!`)
        if (user) return message.channel.send(embed)
    }
}

module.exports.config = {
    name: "howsmart",
    description: "Show How Smart The User That Executed The Command",
    usage: "-howsmart",
    accessableby: "Memebers",
    aliases: []
}