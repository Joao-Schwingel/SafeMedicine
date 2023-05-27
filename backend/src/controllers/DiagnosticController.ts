import { Request, Response } from 'express';
import { Configuration, OpenAIApi } from "openai";
import { OPENAI_TOKEN } from '../config/constants';


class DiagnosticController {
    public async index(req: Request, res: Response) {
        const data = req.body;
        const userQuestion = `${data.symptoms}, ${data.diagnosis}, o que acha?`
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
            {"role": "system", "content": "Você irá ajudar um médico que quer uma segunda opinião para seu diagnostico, ele esta ciente de que não pode confiar"},
            {"role": "user", "content": "Sou um médico e preciso de uma opinião sua sobre meu diagnostico"},
            {"role": "user", "content": userQuestion }
          ],
        });
        return completion.data.choices[0].message?.content
    }

    public mock(req: Request, res: Response) {
        return res.status(200).json({ message: "Com base nos sintomas descritos, a insuficiência cardíaca é uma possibilidade, mas é importante avaliar outros fatores também. A apneia pode estar contribuindo para a fadiga e dificuldade de exercício físico, e pode indicar um problema respiratório subjacente. Outras causas como doença pulmonar, anemia, hipotireoidismo, ou até mesmo uso de medicamentos devem ser consideradas. É necessário fazer um exame físico completo e solicitar exames complementares, como ecocardiograma, radiografia de tórax, exames de sangue, entre outros, para chegar a um diagnóstico definitivo." });
    }
} 
export default new DiagnosticController();