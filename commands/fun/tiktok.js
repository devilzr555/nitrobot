const Discord = require("discord.js");
const TikTok = require("tiktok-search");

module.exports.run = async (bot, message, args) => {
    if (!args[0]) {
        return message.channel.send(`❌ **| Please provide me a valid TikTok username!**`)
    }
    TikTok.getUser(args[0])
        .then((out) => {
            console.log(out);
            const embed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor("RANDOM")
                .setTitle(`${out.displayName} Tiktok Profile`)
                .setURL(out.profile)
                .setThumbnail(out.avatars.medium)
                .setDescription(`
                    **- Username :** ${out.username}
                    **- Display name :** ${out.displayName}
                    **- Followers :** ${out.followers} followers
                    **- Following :** ${out.following} following
                    **- Uploads :** ${out.videos || 0} uploads
                    **- Hearts :** ${out.hearts || 0} :hearts:
                    **- Private :** ${out.private ? "Yes :closed_lock_with_key:" : "Nope :unlock:"}
                    **- Verified :** ${out.verified ? "Yes :verified~1:" : "Nope :wrongggg:"}
                    **- Signature :** ${out.signature || "No Bio"}`)
            message.channel.send(embed)
        })
        .catch(e => {
            console.log(e)
            return message.channel.send("❌ **| No results were found!**");
        });
}

module.exports.help = {
    name: "tiktok",
    aliases: ["tt"]
}