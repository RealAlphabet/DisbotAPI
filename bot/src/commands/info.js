const Discord = require('discord.js');

///////////////////////////////////////////////////////////////////////////
//	COMMAND
///////////////////////////////////////////////////////////////////////////

module.exports = {
    labels: ['info'],

    execute(guild, message, args) {
        let embed = new Discord.RichEmbed();

        embed.setAuthor("DISBOT");
        embed.setDescription("Informations conçernant le BOT");
        embed.setColor('#ff03b3');

        embed.addField("Créateur", "Dot.", true);
        embed.addField("Version", "1.0.0", true);
        // TODO : embed.addField("Inviter le BOT", "https://goo.gl/UX7JAJ");

        embed.setFooter(`Demandé par ${message.author.username}`, message.author.avatarURL);
        embed.setURL('https://disbot.blastrush.net');

        message.channel.send(embed);
    }
};