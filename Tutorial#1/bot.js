const Discord = require('discord.js')
const fs = require('fs')
const bot = new Discord.Client()
const cfgfile = require('./cfg.json')
const token = cfgfile.token
const prefix = '!'
if(token === 'ENTER_TOKEN_HERE')return(console.log('Enter token'))

bot.on('message', async message => {
    if(message.author.bot || message.channel.type === "dm" || !message.content.startsWith(prefix))return
    if(message.content.startsWith(prefix + 'ping')){
        let emb1 = new Discord.RichEmbed()
            .setTitle('PONG')
            .setDescription(`Bot ping: ${bot.ping}ms`)
          //  .addField('Requested by:',`${message.author} (${message.author.id})`)
            .setTimestamp()

        message.channel.send( emb1 )
    }
})

bot.on('ready', () => {
    console.log('Bot tutbot is ready!')
})

bot.login( token )