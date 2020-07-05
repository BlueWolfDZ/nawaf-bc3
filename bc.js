const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "1"

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` **تم ارسال رسالة الى ✅** `); 
 message.delete(); 
};     
});


const developers = ["720594470390726657","663432977581342750"]
var adminprefix = '1'

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setg')) {
  client.user.setGame(argresult);
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
   if (message.content === (adminprefix + "leave")) {
  message.guild.leave();        
} else  
if (message.content.startsWith(adminprefix + 'setw')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
if (message.content.startsWith(adminprefix + 'setl')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.send(`**✅ done :  ${argresult}**`)
} else 
if (message.content.startsWith(adminprefix + 'sets')) {
  client.user.setGame(argresult, "https://www.twitch.tv/dream");
    message.channel.send(`**✅ done : **`)
}
if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
client.user.setAvatar(argresult);
  message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.login(process.env.TOKEN);