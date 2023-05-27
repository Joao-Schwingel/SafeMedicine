import { Request, Response } from 'express';
import { Configuration, OpenAIApi } from "openai";
import { OPENAI_TOKEN } from '../config/constants';


class DiagnosticController {
    public async index(req: Request, res: Response) {
        const configuration = new Configuration({
            apiKey: OPENAI_TOKEN,
          });
          const openai = new OpenAIApi(configuration);
          
          const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {"role": "system", "content": "Você irá ajudar um médico que quer uma segunda opinião para seu diagnostico , estando ciente de que não é confiável"},
                {"role": "user", "content": "Sou um médico e preciso de uma opinião sua sobre meu diagnostico"},
                {"role": "user", "content": "O paciente apresentou um quadro de poliúria, polidipsia, polifagia e perda de peso que teve início há cerca de 3 meses aproximadamente. hemograma completo, dosagem da glicemia sérica em jejum, glicemia 2 horas após teste de tolerância oral à glicose e exame parasitológico de fezes, acredito que seja por causa de Diabetes Mellitus, o que acha?"}
            ],

          });
          console.log(completion.data.choices[0]);
    }
} 
export default new DiagnosticController();