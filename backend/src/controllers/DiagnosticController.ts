import { Request, Response } from 'express';
import { Configuration, OpenAIApi } from "openai";
import { OPENAI_TOKEN } from '../config/constants';


class DiagnosticController {
    public async index(req: Request, res: Response) {
        const data = req.body;
        const userQuestion = `Sintomas: ${data.symptoms} Diagnóstico: ${data.diagnosis}, o que acha?`
        return await this.openAiRequest(userQuestion);
    }

    private async openAiRequest(userQuestion) {
        const configuration = new Configuration({
            apiKey: OPENAI_TOKEN,
        });
        const openai = new OpenAIApi(configuration);
          
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            {"role": "system", "content": "Você irá ajudar um médico que quer uma segunda opinião para seu diagnostico , estando ciente de que não é confiável"},
            {"role": "user", "content": "Sou um médico e preciso de uma opinião sua sobre meu diagnostico, gostaria da resposta sem quebras de linha"},
            {"role": "user", "content": userQuestion }
          ],
        });
        return completion.data.choices[0].message?.content
    }
} 
export default new DiagnosticController();