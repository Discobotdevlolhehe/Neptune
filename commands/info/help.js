const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");

module.exports = {
  name: "help",
   aliases: ["hlp"], // the help cmd
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

    //--------------------EMBEDS------------------------

    const embed = new Discord.MessageEmbed()
    .setImage('https://cdn.discordapp.com/attachments/893603647714381854/898464997552848926/standard_23.gif')
    .setDescription(`**ALSO YOU CAN DO +help2 FOR MORE CMD**`);

    const embed1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage('https://cdn.discordapp.com/attachments/893603647714381854/898464997552848926/standard_23.gif')
    .setTitle(' **__FUN COMMANDS__** ')
    .setDescription(`
  > ☆ advice 
  > ☆ joke 
  > ☆ meme 
  > ☆ topic 
  > ☆ why
  > ☆ 8ball`);

    const embed2 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage('https://cdn.discordapp.com/attachments/893603647714381854/898464997552848926/standard_23.gif')
    .setTitle(' **_MUSIC COMMAND_**  ')
    .setDescription(`
    > ☆ play
    > ☆ clearqueue
    > ☆ pause
    > ☆ queue
    > ☆ resume
    > ☆ now playing
    > ☆ filters
    > ☆ skip
    > ☆ stop
    > ☆ volume
    > ☆ search`);

    const embed3 = new Discord.MessageEmbed()
    .setImage('https://cdn.discordapp.com/attachments/893603647714381854/898464997552848926/standard_23.gif')
    .setTitle(' **_RANK COMMANDS _**')
    .setColor("RANDOM")
    .setDescription(`
    > ☆ leaderboard 
    > ☆ rank `);

    const embed4 = new Discord.MessageEmbed()
    .setImage('https://cdn.discordapp.com/attachments/893603647714381854/898464997552848926/standard_23.gif')
    .setTitle('**_ MOD COMMANDS_* ')
    .setColor("RANDOM")
    .setDescription(`
    > ☆ afk
    > ☆ ban
    > ☆ lockdown
    > ☆ moveall
    > ☆ poll
    > ☆ snipe
    > ☆ unbanall
    > ☆ warn
    > ☆ purge
    > ☆ steal-emoji | se
    > ☆voicekick
    > ☆setnick
    > ☆modlog`);

    const embed5 = new Discord.MessageEmbed()
    .setImage('https://cdn.discordapp.com/attachments/893603647714381854/898464997552848926/standard_23.gif')
    .setTitle(' INFO COMMANDS _**')
    .setColor("RANDOM")
    .setDescription(`
    > ☆ help 
    > ☆ avatar 
    > ☆ invite 
    > ☆ menu 
    > ☆ ping ,
    > ☆ shorturl 
    > ☆sourcebin
    > ☆help2
    > ☆anime
    > ☆botinfo
    > ☆pokemon
    > ☆serveravatar
    > ☆serverinfo
    > ☆whois
    > ☆botinfo
    > ☆country
    > ☆badge`);
    
    //--------------------EMBEDS------------------------

    //--------------------Buttons------------------------
let button1 = new MessageButton()
    .setLabel(`FUN`)
    .setID(`help1`)
    .setStyle("gray");
    

     let button2 = new MessageButton()
    .setLabel(`MUSIC`)
    .setID(`help2`)
    .setStyle("gray");

     let button3 = new MessageButton()
    .setLabel(`LEVELING`)
    .setID(`help3`)
    .setStyle("red");
    if(!message.member.roles.cache.has("889887906838233098")) button3.setDisabled(false);

     let button4 = new MessageButton()
    .setLabel(`MOD`)
    .setID(`help4`)
    .setStyle("gray");
    if(!message.member.hasPermission("ADMINISTRATOR")) button4.setDisabled(true);

     let button5 = new MessageButton()
    .setLabel(`INFO`)
    .setID(`help5`)
    .setStyle("gray");

    let button6 = new MessageButton()
    .setLabel('Animals')
    .setID('help5')
    .setStyle('gray')
    

    let row = new MessageActionRow()
    .addComponents(button1, button2, button3, button4, button5,);

    //--------------------Buttons------------------------

    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 120000 });

    collector.on('collect', async (b) => {

       if(b.id == "help1") {

            MESSAGE.edit(embed1, row);
            await b.reply.defer()

        }

        if(b.id == "help2") {
            
            MESSAGE.edit(embed2, row);
            await b.reply.defer()

        }

        if(b.id == "help3") {
            
            MESSAGE.edit(embed3, row);
            await b.reply.defer()

        }

        if(b.id == "help4") {
         
            MESSAGE.edit(embed4, row);
            await b.reply.defer()
        }

        if(b.id == "help4") {
         
            MESSAGE.edit(embed4, row);
            await b.reply.defer()
        }

        if(b.id == "help5") {
         
            MESSAGE.edit(embed5, row);
            await b.reply.defer()
        }


  
  
    })

    collector.on('end', (b) => {
        MESSAGE.edit(`This help menu is expired! Type the command again to view.`)
    })

       //---------------------------------------E N D----------------------------------------
       

    }
  };