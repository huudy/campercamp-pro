const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

const response = await openai.createChatCompletion({
  model: 'gpt-3.5-turbo',
  messages: [],
  temperature: 0.5,
  max_tokens: 256
});
