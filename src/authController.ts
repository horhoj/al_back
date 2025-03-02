import { Router, Request, Response } from 'express';
import { MOCK_EMAIL, MOCK_PASSWORD, MOCK_TOKEN } from './constants';

const router = Router();

router.post('/sign-in', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email) {
    res.status(400).json({ error: 'Email is required' });
    return;
  }

  if (!password) {
    res.status(400).json({ error: 'Password is required' });
    return;
  }

  if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
    res.json({
      success: true,
      data: {
        token: MOCK_TOKEN,
      },
    });
  } else {
    res.status(400).json({
      success: false,
      data: {
        error: 'Incorrect credentials',
      },
    });
  }
});

router.delete('/sign-out', async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  if (authorization === MOCK_TOKEN) {
    res.json({
      success: true,
      data: {
        message: 'Success sign-out',
      },
    });
  } else {
    res.status(400).json({
      success: false,
      data: {
        error: 'Error authorization token',
      },
    });
  }
});

router.get('/check-token', async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  if (authorization === MOCK_TOKEN) {
    res.json({
      success: true,
      data: {
        message: 'Token is active',
      },
    });
  } else {
    res.status(400).json({
      success: false,
      data: {
        error: 'Token is not active',
      },
    });
  }
});

export default router;
