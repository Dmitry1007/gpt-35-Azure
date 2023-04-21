import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser"; // middleware
import cors from "cors"; // middleware

const config = new Configuration({
    // organization: "",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req, res) => {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello, who are you?" }],
    });
    res.json({ completion: completion.data.choices[0].message });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.post("/chat", async (req, res) => {
    const { message } = req.body;
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `${message}` }],
    });
    res.json({ completion: completion.data.choices[0].message });
});
