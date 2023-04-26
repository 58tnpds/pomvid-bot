const { Client, EmbedBuilder, Events, GatewayIntentBits } = require('discord.js');
const { request } = require('undici');
const dotenv = require('dotenv');
const schedule = require('node-schedule');
const data = require("./lib");
const mqtt = require('mqtt')
const host = 'broker.hivemq.com'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt://${host}:${port}`

const client_mqtt = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'emqx',
  password: 'public',
  reconnectPeriod: 1000,
})

dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.MessageContent]
});

client.once(Events.ClientReady, () => {

  console.log('Ready!');
});

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return

  if (message.content === "sub pomvid") {
    const embed = await data.embed();
    const job = schedule.scheduleJob('0 12 * * *', function () {
      message.channel.send({
        embeds: [embed]
      }).catch((e) => {
        console.log(e)
      })
    });
    message.delete();
  }

  if (message.content === "unsub pomvid") {
    for (const job in schedule.scheduledJobs) schedule.scheduledJobs[job].cancel();
    message.delete();
  }

  if (message.content === "on") {
    client.on('connect', () => {
      client.publish(topic, 'ON', { qos: 0, retain: false }, (error) => {
        if (error) {
          console.error(error)
        }
      })
    })
    message.delete();
  }


})

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;
  await interaction.deferReply();

  if (commandName === 'pomvid') {

    interaction.editReply({ embeds: [await data.embed()] });

  }
});

client.login(process.env.TOKEN);