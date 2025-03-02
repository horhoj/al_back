import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  res.json({
    success: true,
    data: {
      info: 'Some information about the <b>company</b>.',
    },
  });
});

export default router;
