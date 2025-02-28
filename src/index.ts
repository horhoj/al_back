import express from 'express';
import bodyParser from 'body-parser';
import todoController from './todoController';
const cors = require('cors')

const app = express();
app.use(cors())

app.use(bodyParser.json());

// Роуты
app.use('/todos', todoController);

// Запуск сервера
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
