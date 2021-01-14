const Discord = require('discord.js');
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  const errNoPermsReview = new Discord.MessageEmbed()
  .setTitle("🔒 Access Denied!")
  .setFooter("Reviewer Role is required to review applications!")
  .setColor("RANDOM")
   
if(!message.member.roles.cache.some(r => r.id === config.REVIEWER_ID)) return message.channel.send(errNoPermsReview)
   
 
 if(!args[0]) return message.channel.send("`USAGE: +reject [MEMBER] [RESPONSE MESSAGE]`")
 let dUser =
  message.guild.member(message.mentions.users.first())
  
 if (!dUser) return message.channel.send("`Mention someone to reject!`");
 
 let dMessage = args.join(' ').slice(22);
 
 const noRespMsg = new Discord.MessageEmbed()
       .setTitle('📛 **Error**')
       .setDescription('Please write a response message')
       .setFooter('USAGE: +reject [MENTION] [RESPONSE MESSAGE]')
       .setColor("RANDOM")
       
 if (dMessage.length < 1) return message.reply(noRespMsg);
 
const rejectUSER = new Discord.MessageEmbed()
       .setTitle('**Hey there!**')
       .setDescription('You got a response from application in [`' + message.guild.name + '`]')
       .addField('Status:','Rejected')
       .addField('Rejected by:',`${message.author}`)
        .addField('Response Message:',`${dMessage}`)
       .setFooter("Contact the staff for more details")
       .setColor("RANDOM")
    
 dUser.send(rejectUSER);

const rejectConfirm = new Discord.MessageEmbed()
    .setTitle('**Applicant Rejected**')
    .setDescription(`You can check your inbox, ${dUser}!`)
    .setColor("RANDOM")
   
message.channel.send(rejectConfirm)


}
module.exports.help = {
  name: 'reject',
  aliases: ['rjct']
}
