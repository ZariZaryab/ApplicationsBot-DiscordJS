/* CONSTANTS */
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.PREFIX;

/* COMMAND HANDLER */
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
 
/* LOAD COMMAND FILES */
fs.readdir('./COMMANDS/', (err, files) => {

  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")

  if (jsfile.length <= 0) {
    console.log("[WARNING]: Command folder is empty, No files loaded!")
    return;
  }

  setTimeout(function() {
    console.log("[BOOT]: Reading files...");
  }, 0)

  jsfile.forEach((f, i) => {
    let props = require(`./COMMANDS/${f}`)
    console.log(`[BOOT]: Fetched ${f}`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name)
    })
  })

  setTimeout(function() {
    console.log(`[BOOT]: Verified all commands!`);
  }, 1000)
})
    /* COMMANDS */

  client.on("message", async message => {

    let messageArray = message.content.split(" ");
    let commandName = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(commandName.slice(prefix.length)) || client.commands.get(client.aliases.get(commandName.slice(prefix.length)));
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (commandfile) commandfile.run(client, message, args);
  })


   /* BOOT STATS */

client.on("ready", () => {
  console.log(`[BOOT]: Booted client ${client.user.tag}!`)
  client.user.setStatus('online')
   let statuses = [`applications you sent...`, `with Gazarino`]
   setInterval(function() {
      let status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setActivity(status, { type: "WATCHING" })
  }, 25000)
})

client.login(config.TOKEN);
