
const Discord = require('discord.js');

///////////////////////////////////////////////////////////////////////////
//	COMMAND
///////////////////////////////////////////////////////////////////////////

module.exports = {
    labels: ['help'],

    execute(guild, message, args) {
        let embed = new Discord.RichEmbed();

        embed.setAuthor("MENU D'AIDE");
        embed.setDescription("Voici la liste des commandes disponibles.");
        embed.setColor('#ff03b3');

        embed.addField(".info", "Affiche les informations du BOT et donne un lien d'invitation.");
        embed.addField(".join", "Donne un lien d'invitation vers notre Discord.");
        embed.addField(".create", "Créer ou récupère votre invitation.");
        embed.addField(".invite", "Affiche les détails de votre invitation.");
        embed.addField(".level", "Affiche votre niveau de réputation sur le serveur.");

        embed.setFooter(`Demandé par ${message.author.username}`, message.author.avatarURL);
        embed.setURL('https://disbot.blastrush.net');

        message.channel.send(embed);
    }
};