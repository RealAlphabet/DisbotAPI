const { Guild, GuildMember } = require('discord.js');
const COMMANDS = [];

/////////////////////////////////////////////////////////////////////////////////////

Guild.prototype.__invitations = [];

Guild.prototype.__commandDelete = true;

Guild.prototype.__fireJoin = function(member) {

};

Guild.prototype.__fireLeave = function(member) {

};

Guild.prototype.__dispatchCommand = function (message, label, args) {
    return COMMANDS.some(command => {
        if (command.labels.some(_label => _label === label)) {
            command.execute(this, message, args);
            return true;
        }
    });
};

/////////////////////////////////////////////////////////////////////////////////////

Object.defineProperty(GuildMember.prototype, 'invitation', {
    get: function() {
        console.log(this);
    }
});

/////////////////////////////////////////////////////////////////////////////////////

module.exports = {
    hook(client) {
        client.on('message', function (message) {
            let guild = message.guild;
            let content = message.content;

            if (content.startsWith('.')) {
                let args = content.split(' ');
                let label = args.shift().substr(1);

                if (guild.__commandDelete)
                    message.delete();

                if (!guild.__dispatchCommand(message, label, args))
                    message.reply("Commande inconnu.");
            }
        });

        client.on('guildMemberAdd', function(member) {
            member.guild.__fireJoin(member);
        });

        client.on('guildMemberRemove', function(member) {
            member.guild.__fireLeave(member);
        });
    },

    registerCommand(path) {
        COMMANDS.push(require(path));
    }
};