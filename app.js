const config = require('./.env');
const Client = require('./src/Client.js'); // kindly your ass better make this
const { Intents } = require('discord.js');

global.__basedir = __dirname;

// we need these okay?
const intents = new Intents();
intents.add(
  'GUILD_PRESENCES',
  'GUILD_MEMBERS',
  'GUILDS',
  'GUILD_VOICE_STATES',
  'GUILD_MESSAGES',
  'GUILD_MESSAGE_REACTIONS'
);
const client = new Client(config, { ws: { intents: intents } });

// Initialize client
function init() {
 // client.loadEvents('./src/events');
 // client.loadCommands('./src/commands');
 //  client.loadTopics('./data/trivia');
   client.login(client.BOT_TOKEN);
}

init();

process.on('unhandledRejection', err => client.logger.error(err));