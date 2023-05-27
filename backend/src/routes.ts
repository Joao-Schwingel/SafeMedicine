import { Router } from 'express';
import DiagnosticController from './controllers/DiagnosticController';
import { body, validationResult } from 'express-validator';

const routes = Router();

const validarBody = [
  body('symptoms').isString().withMessage('The symptoms must be a string'),
  body('diagnosis').isString().withMessage('The diagnosis must be a string')
];
// User
routes.post('/diagnostic', validarBody, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const answer = await DiagnosticController.index(req, res)
    console.log(answer)
    res.status(200).json({ message: answer })
  } catch(error) {
    res.status(500).json({ error: "Internal server error "})
  }
  
} );

export default routes;
