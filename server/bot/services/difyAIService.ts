import axios from "axios";
import RAGService from "./ragService";
import { extractAnswers } from "../utility/extractor";

class DifyAIService extends RAGService {
  private apiKey: string;

  constructor(apiKey: string) {
    super();
    this.apiKey = apiKey;
  }

  async getResponse(userMessage: string, username: string): Promise<string> {
    try {
      // Make a POST request to the Dify.ai API
      const response = await axios.post(
        "https://api.dify.ai/v1/chat-messages",
        {
          inputs: {},
          query: userMessage,
          response_mode: "streaming",
          conversation_id: "",
          user: username,
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Use the extractAnswers utility function to process the messages directly
      const apiAnswer = extractAnswers(response.data);

      if (apiAnswer.length > 0) {
        return `${apiAnswer}`;
      } else {
        return "AI did not provide a valid response.";
      }
    } catch (error:any) {
      // Handle errors when calling the Dify.ai API
      console.error("Error calling Dify.ai API:", error.message);
      throw new Error(`Error calling Dify.ai API: ${error.message}`);
    }
  }
}

export default DifyAIService;
