const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId } = require('./config.json');
const { readdirSync } = require("node:fs")
const { sep } = require("node:path");

const rest = new REST({ version: '9' }).setToken(process.env.token);

const commands = [];
const dir = `${__dirname}/commands`;


	readdirSync(dir).forEach(dirs => {

		const commandsF = readdirSync(`${dir}${sep}${dirs}${sep}`).filter(files => files.endsWith(".js"));

		for (const file of commandsF) {

			const pull = require(`${dir}/${dirs}/${file}`);
     console.log(pull)
    commands.push(pull.data.toJSON())
    }
  })

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);