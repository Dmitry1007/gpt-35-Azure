import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    // organization: "",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);
