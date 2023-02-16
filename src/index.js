import {channelLink, REST, Routes} from 'discord.js';
import {Client, GatewayIntentBits} from 'discord.js';
import {config} from 'dotenv';

config();

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildMembers,
] });
const token="MTA3MTcyNDM1NTUxNzY3NzU4OA.GbAPtt.BjnLQtpKlbu7iyJFikZF2kpinkukUO4YBLI6d0"

client.on('ready',async()=>{
    console.log(`${client.user.username} is online!!!!`);
    

});

client.on("guildMemberAdd", member=>{
    console.log(`Yeni kisi eklendi Kullanici adi:${member.user.username} tagi=${member.user.tag}`);
   
});


client.login(token);

function x(){
    document.getElementById('hello').style.display='block';
}
