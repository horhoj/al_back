import { Router, Request, Response } from 'express';
import { MOCK_TOKEN } from './constants';
import { delay } from './delay';

const router = Router();

router.get('/profile-data', async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  if (authorization === MOCK_TOKEN) {
    res.json({
      success: true,
      data: {
        fullname: 'Alexey',
        email: 'Al',
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

router.get('/profile-author', async (req: Request, res: Response) => {
  await delay(5000);
  const randomNumber = Math.floor(Math.random() * 10) % 2;
  const { authorization } = req.headers;
  if (authorization === MOCK_TOKEN) {
    if (randomNumber === 1) {
      res.json({
        success: true,
        data: {
          authorId: 1,
          name: 'Author 1',
        },
      });
    } else {
      res.json({
        success: true,
        data: {
          authorId: 2,
          name: 'Autor 2',
        },
      });
    }
    // res.status(400).json({
    //   success: false,
    //   data: {
    //     error: 'testError',
    //   },
    // });
  } else {
    res.status(400).json({
      success: false,
      data: {
        error: 'Token is not active',
      },
    });
  }
});

router.get('/profile-quote', async (req: Request, res: Response) => {
  await delay(5000);
  const { authorization } = req.headers;
  if (authorization === MOCK_TOKEN) {
    const { authorId } = req.query;
    if (authorId === '1') {
      res.json({
        success: true,
        data: {
          quoteId: 1,
          authorId: 1,
          quote: 'quote for Author 1',
        },
      });
    } else if (authorId === '2') {
      res.json({
        success: true,
        data: {
          quoteId: 2,
          authorId: 2,
          quote: 'quote for Author 2',
        },
      });
    } else {
      res.status(400).json({
        success: false,
        data: {
          error: 'Unknown author',
        },
      });
    }
    // res.status(400).json({
    //   success: false,
    //   data: {
    //     error: 'testError',
    //   },
    // });
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
