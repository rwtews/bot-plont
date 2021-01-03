const token = 'NzkzODA4ODE1MzcxOTc2NzE1.X-xqEQ.WPHoGfYDZ8NwefKEeMJSaNFGrr4'
const Discord = require('discord.js');

const client = new Discord.Client();
client.once('ready', () => {
  console.log('Ready!');
});

client.login(token);