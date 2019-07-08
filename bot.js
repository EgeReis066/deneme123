const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTkzMDQwNDkwOTk2NDMyOTA2.XRJ4tQ.DLTlBl7Ei1v-Qe44hc3AxJTS_hA);
