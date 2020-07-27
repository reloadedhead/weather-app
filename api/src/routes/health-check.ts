import { Request, Response, Router } from 'express';

const healthCheckRoutes = Router();

healthCheckRoutes.get('/health-check', [], (req: Request, res: Response) =>
  res
    .status(200)
    .contentType('application/health+json')
    .json({ status: 'healthy' })
);

export default healthCheckRoutes;
