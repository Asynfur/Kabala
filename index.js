const { readdirSync } = require("fs");
const { sep } = require("path");
const { Client, Intents, Collection} = require('discord.js');
const allIntents = new Intents(32767);
const client = new Client({ intents: allIntents, partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER'] });
const loadEvents = require('./handlers/event.js');
const boxen = require('boxen')

client.commands = new Collection();
const com = []

function loadCommands(dir = "./commands/") {

	readdirSync(dir).forEach(dirs => {

		const commands = readdirSync(`${dir}${sep}${dirs}${sep}`).filter(files => files.endsWith(".js"));

		for (const file of commands) {

			const pull = require(`${dir}/${dirs}/${file}`);
      
			if (typeof (pull.name) === "string" && typeof (pull.category) === "string") {
        
				if (client.commands.get(pull.name)) return console.warn(`Two or more commands have the same name ${pull.name}.`);
				client.commands.set(pull.name, pull);
				com.push(`Loaded command ${pull.name}.`);
        
			}
			else {
				console.log(`Error loading command in ${dir}${dirs}. you have a missing name or name is not a string. or you have a missing category or category is not a string`);
				continue;
			}
		}
	});
};

loadEvents(client, __dirname+'/events')
loadCommands()
console.log(boxen(com.join("\n"), {title: 'Commands', titleAlignment: 'center'}))


client.login(process.env.token)