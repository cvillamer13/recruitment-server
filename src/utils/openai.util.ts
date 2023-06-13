import openai from '../configs/openai.config'
import dotenv from 'dotenv'
dotenv.config()

export default async function generate(data: string) {
  return await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: data,
      },
    ],
  })
}
