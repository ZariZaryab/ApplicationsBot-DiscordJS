const Discord = require('discord.js');
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  
        
 const errNoPermsReview = new Discord.MessageEmbed()
      .setTitle("🔒  **Access Denied** ")
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setFooter("Reviewer Role is required to review applications!")
      .setColor("RANDOM")
   
if(!message.member.roles.cache.some(r => r.id === config.REVIEWER_ID)) return message.channel.send(errNoPermsReview)
   
 
 if(!args[0]) return message.channel.send("`USAGE: +accept [MEMBER] [RESPONSE MESSAGE]`")
 let dUser =
  message.guild.member(message.mentions.users.first())
  
 if (!dUser) return message.channel.send("`Mention someone to accept!`");
 
 let dMessage = args.join(' ').slice(22);
 
 const noRespMsg = new Discord.MessageEmbed()
       .setTitle('📛 **Error**')
       .setDescription('Please write response message')
       .setFooter('USAGE: +accept [MENTION] [RESPONSE MESSAGE]')
       .setColor("RANDOM")
       
 if (dMessage.length < 1) return message.reply(noRespMsg);
 
const acceptUSER = new Discord.MessageEmbed()
       .setTitle('**Congratulations!**')
       .setDescription('You got a response from application in [`' + message.guild.name + '`]')
       .addField('Status:','Accepted')
       .addField('Accepted by:',`${message.author}`)
         .addField('Response Message:',`${dMessage}`)
       .setFooter("Contact the staff for more details")
       .setColor("RANDOM")
    
 dUser.send(acceptUSER);

const acceptConfirm = new Discord.MessageEmbed()
    .setTitle('**Applicant Accepted**') 
    .setDescription(`You can check your inbox, ${dUser}!`)
    .setColor("RANDOM")
   
message.channel.send(acceptConfirm)

}
module.exports.help = {
  name: 'accept',
  aliases: ['acpt']
}
