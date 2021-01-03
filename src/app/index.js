const token = 'NzkzODA4ODE1MzcxOTc2NzE1.X-xqEQ.Q8ivTt-c1XkpvyWhHXZN_qRVRdM'
const Discord = require('discord.js');

const client = new Discord.Client();
client.once('ready', () => {
  console.log('Ready!');
});

client.login(token);