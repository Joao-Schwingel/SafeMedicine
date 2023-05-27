import { Request, Response } from 'express';

class DiagnosticController {
    public async index(req: Request, res: Response) {
        console.log("teste");
    }
} 
export default new DiagnosticController();