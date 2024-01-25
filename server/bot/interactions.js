"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
var discord_js_1 = require("discord.js");
var dotenv = require("dotenv");
var path = require("path");
dotenv.config({ path: path.join(__dirname, '../.env') });
var messageHandler_1 = require("./handlers/messageHandler");
var botToken = process.env.BOT_TOKEN || "";
var difyApiKey = process.env.DIFY_API_KEY || "";
var client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
    ],
});
var messageHandler = new messageHandler_1.default(client, difyApiKey);
messageHandler.startListening();
client.login(botToken);
