import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    res.status(200).json('Hello!')
})

app.post('/api', async (req, res) => {
    try {
        const { prompt } = req.body;

        console.log(prompt);

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 0,
            max_tokens: 300,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        });

        console.log(response.data.choices[0].text)

        return res.status(200).send({message: response.data.choices[0].text});
    } catch(err) {
        return res.status(400).send(err)
    }
})

app.listen(PORT , () => console.log(`Server strted on port ${process.env.PORT}`))
