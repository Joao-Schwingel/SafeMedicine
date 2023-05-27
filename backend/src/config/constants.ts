require('dotenv').config()
export const API_PORT = parseInt(process.env.API_PORT || '8081');
export const OPENAI_TOKEN = process.env.OPENAI_TOKEN;


