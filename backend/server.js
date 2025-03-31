const express = require("express");
const dotenv = require("dotenv");
const OpenAI = require("openai");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const openai = new OpenAI({
    baseURL: "https://models.inference.ai.azure.com",
    apiKey : process.env.GITHUB_TOKEN,
});

app.post("/chat", async (req, res) => {
    try{
        const { message } = req.body;

        const response = await openai.chat.completions.create({
            model : "gpt-4o",
            messages : [
                { role : "system", content : "You asking some coding interview questions from the user."},
                { role : "user", content : message },
            ],
            temperature : 0.7,
            max_tokens : 1000,
            top_p : 1,
        });

        res.json({ reply : response.choices[0].message.content });
    }catch(error){
        console.error("Hiba az OpenAI API hívás során:", error);
        res.status(500).json({ error: "Hiba történt a szerver oldalon." });
    }
});

app.listen(PORT, () => {
    console.log(`✅Server is running on port ${PORT}`);
}); 
