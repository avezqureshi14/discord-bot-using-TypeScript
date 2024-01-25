import { Client, Message } from "discord.js";
import DifyAIService from "../services/difyAIService";
import channelIds from "../handlers/channels";

class MessageHandler {
  private readonly client: Client;
  private readonly difyAIService: DifyAIService;

  constructor(client: Client, difyApiKey: string) {
    this.client = client;
    this.difyAIService = new DifyAIService(difyApiKey);
  }

  public startListening() {
    this.client.on("messageCreate", this.handleMessage.bind(this));
  }

  private async handleMessage(message: Message) {
    if (message.author.bot) {
        return;
      }
    
      const username = message.author.id;
      const userMessage = message.content;
    
      /*
    Temporary solution using //@ts-ignore
    we are using //@ts-ignore to suppress errors in the following lines.
    These lines handle specific cases that are safe in our context.
    */
    
      const isThread =
        //@ts-ignore
        message.channel.type === "GUILD_TEXT" && message.reference?.messageId;
      const channelId = isThread
        ? //@ts-ignore
          message.reference.channelId
        : message.channelId;
    
      //@ts-ignore
      const guildId = message.guild.id;
    
      //@ts-ignore
      const categoryId = message.channel.parentId;
    
      //@ts-ignore
      const channel = channelIds.find(
        (m) => channelId === m.id || categoryId === m.id || guildId === m.id
      );
    
      //@ts-ignore
      const channel = channelIds.find(
        (m) => channelId === m.id || categoryId === m.id || guildId === m.id
      );
    
      if (channel) {
        try {
          const apiAnswer = await this.difyAIService.getResponse(userMessage, username);
    
          if (apiAnswer.length > 0) {
            message.reply({
              content: `Dify.ai Response: ${apiAnswer}`,
            });
          } else {
            message.reply({
              content: "Dify.ai did not provide a valid response.",
            });
          }
        } catch (error: any) {
          console.error(error.message);
          message.reply({
            content: error.message,
          });
        }
      } else {
        message.reply({
          content: "Message from unkown Channel ",
        });
      }
}
}

export default MessageHandler;
