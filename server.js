const express = require('express')
const OpenAI = require("openai")
const dotenv = require('dotenv')

dotenv.config()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API ESTÁ A RODAR...')
  })
  
app.post('/openai', async (req, res) => {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
                role: "user",
                content: req.body.input,
            },
        ],
    });
    res.json(completion.choices[0].message)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})