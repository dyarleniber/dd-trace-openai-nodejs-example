import dataDogTracer from "dd-trace";
import express from "express";
import OpenAI from "openai";
dataDogTracer.init({
    logInjection: true,
    runtimeMetrics: true,
});
const openAIClient = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
const app = express();
app.get("/", async (req, res) => {
    const response = await openAIClient.chat.completions.create({
        messages: [{ role: "user", content: "How old is the earth?" }],
        model: "gpt-4-turbo",
        temperature: 0,
    });
    res.status(200).json({ response: response.choices?.[0]?.message?.content });
});
app.listen(3000, () => {
    console.log("server listening on port 3000");
});
