const db = require("quick.db")

module.exports.run = (client) => {
  console.log("JOIN Acex Support Server: https://discord.gg/fNSnR9R")
  client.user.setActivity(db.get(`status`)); 
}