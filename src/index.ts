import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { RESPONSE_DELAY_MS } from './constants';
import infoController from './infoController';
import authController from './authController';
import { delay } from './delay';
import profileController from './profileController';

const app = express();
app.use(cors());

app.use(bodyParser.json());
//delay middleware
app.use(async function (_, _2, next) {
  await delay(RESPONSE_DELAY_MS);
  next();
});

// Роуты
app.use('/info', infoController);
app.use('/auth', authController);
app.use('/profile', profileController);

// Запуск сервера
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
