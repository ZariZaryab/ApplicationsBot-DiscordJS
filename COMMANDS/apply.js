const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  
    function QuestionEmbed (contentIndex) {
        const dmEmb = new Discord.MessageEmbed()
                        .setTitle(contentIndex)
                        .setColor('RANDOM')
                        .setFooter('Not replying will cancel the application')
                        
        return dmEmb;
    }
    const answers = [];
    const question =  ['Q1','Q2','Q3','Q4','Q5']
   
    
        if(message.channel.type == 'dm') return;

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
        .setTitle("🔱 **Let's begin the application**")
        .setDescription('>Answer the questions below as sent. (one reply per question)')
        .setColor("RANDOM")
   let appChannel = await message.author.send(dmStartApp);

        await message.author.send(QuestionEmbed(question[0]));
        let answer = await appChannel.channel.awaitMessages(answer => answer.author.id != client.user.id,  {max: 1});
        answers[0] = (answer.map(answers => answers.content).join());

    
        await message.author.send(QuestionEmbed(question[1]));
        answer = await appChannel.channel.awaitMessages(answer => answer.author.id != client.user.id,  {max: 1});
        answers[1] = (answer.map(answers => answers.content).join());

      
        await message.author.send(QuestionEmbed(question[2]));
        answer = await appChannel.channel.awaitMessages(answer => answer.author.id != client.user.id,  {max: 1});
        answers[2] = (answer.map(answers => answers.content).join());

        
        await message.author.send(QuestionEmbed(question[3]));
        answer = await appChannel.channel.awaitMessages(answer => answer.author.id != client.user.id,  {max: 1});
        answers[3] = (answer.map(answers => answers.content).join());

      
        await message.author.send(QuestionEmbed(question[4]));
        answer = await appChannel.channel.awaitMessages(answer => answer.author.id != client.user.id,  {max: 1});
        answers[4] = (answer.map(answers => answers.content).join());

        
        const Embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription('Staff can review this application...')
        .setTitle('New Application Received!')
        .setFooter(`User Tag: ${message.author.tag} | User ID: ${message.author.id}`)
        .setColor('RANDOM')
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
        .setDescription('Please be patient while your application is reviewed by staff)
        .setThumbnail('https://i.pinimg.com/originals/98/64/9a/98649add72e05e3cc1b8ae0e6f553c8e.gif')
        .setFooter('Have a good stay!')
        .setColor("RANDOM")
    message.author.send(appFinishDM)

     


}
module.exports.help = {
  name: 'apply',
  aliases: ['a']
}
