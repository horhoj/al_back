import { Router, Request, Response } from 'express';

const router = Router();

// Получение всех туду
router.get('/', async (req: Request, res: Response) => {
  res.json({ data: 'fetch todoData' });
});

// Добавление нового туду
router.post('/', async (req: Request, res: Response) => {
  const { text } = req.body;
  if (!text) {
    res.status(400).json({ error: 'Text is required' });
    return;
  }

  res.json({ data: 'post todo data' });
});

export default router;
