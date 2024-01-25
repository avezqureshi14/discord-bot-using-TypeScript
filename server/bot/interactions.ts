import { Client, GatewayIntentBits } from "discord.js";
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });
import MessageHandler from "./handlers/messageHandler";


const botToken: string = process.env.BOT_TOKEN || "";
const difyApiKey: string = process.env.DIFY_API_KEY || "";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const messageHandler = new MessageHandler(client, difyApiKey);
messageHandler.startListening();

client.login(botToken);
