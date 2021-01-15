const Discord = require('discord.js');
const config = require("../config.json");
const q = require("../questions.json");

module.exports.run = async (client, message, args) => {

     const applyErrChannel = new Discord.MessageEmbed()
        .setTitle("🔒  **Access Denied** ")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setFooter("You can't apply in this channel! Contact staff for applications channel")
        .setColor("RANDOM")

if(message.channel.id !== config.APPLY_CHANNEL) return message.channel.send(applyErrChannel);
    
function EachEmbed (contentIndex) {
        const dmEmb = new Discord.MessageEmbed()
                        .setTitle(contentIndex)
                        .setColor('RANDOM')
                        .setFooter('Not replying will cancel the application')
                        
        return dmEmb;
    }
    
   const answers = [];
   const question = Object.values(q)

        const startedApp = new Discord.MessageEmbed()
         .setTitle("🔱 **Application Forwarded**")
         .setDescription('in applicant `DM` box.')
         .addField('Status','Applying...')
         .setAuthor(message.author.username, message.author.displayAvatarURL())
         .setThumbnail('https://miro.medium.com/max/1600/1*e_Loq49BI4WmN7o9ItTADg.gif')
         .setFooter('Application has been started in Direct Messages (DM)...')
         .setColor("RANDOM")
    message.channel.send(startedApp)
       
       const dmStartApp = new Discord.MessageEmbed()
        .setTitle("📤 **Let's begin the application**")
        .setDescription('> Answer the questions below as sent')
        .setColor("RANDOM")
   let appChannel = await message.author.send(dmStartApp);


for(let index = 0; index < question.length; index++) {
  
  await message.author.send(EachEmbed(question[index]));
        let answer = await appChannel.channel.awaitMessages(answer => answer.author.id != client.user.id,  {max: 1});
        answers[index] = (answer.map(answers => answers.content).join());
}

        const Embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username + "'s Application", message.author.displayAvatarURL())
        .setFooter(`Tag: ${message.author.tag} | ID: ${message.author.id}`)
        .setColor('RANDOM')
        
        /* ATTACH TO EMBED */
        question.forEach((q,i)=>{
            Embed.addField(q,answers[i])
        
        })
        
        const appLogs = client.channels.cache.get(config.LOG_CHANNEL);
         if (!appLogs) return console.error("[WARNING]: Log channel not set or invalid.");
        await appLogs.send(Embed)
    
        
       const finishedApp = new Discord.MessageEmbed()
        .setTitle("✅ **Application Forwarded**")
        .setDescription('to `application-logs` of server.')
        .addField('Status','Applied!')
        .setThumbnail('https://i.pinimg.com/originals/98/64/9a/98649add72e05e3cc1b8ae0e6f553c8e.gif')
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setFooter('You will be notified soon.')
        .setColor("RANDOM")
    message.channel.send(finishedApp)
       const appFinishDM = new Discord.MessageEmbed()
        .setTitle("✅ **Application has been sent!**")
        .setDescription('Please be patient while your application is reviewed by staff')
        .setThumbnail('https://i.pinimg.com/originals/98/64/9a/98649add72e05e3cc1b8ae0e6f553c8e.gif')
        .setFooter('Good luck!')
        .setColor("RANDOM")
    message.author.send(appFinishDM)


}

module.exports.help = {
  name: 'apply',
  aliases: ['a']
}
