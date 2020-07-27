import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';
import dataParser from './utils/dataParser';
import routes from './routes';

const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ reviver: dataParser }))

app.use('/api/v1', routes)

const apiPort = parseInt(process.env.API_PORT || '3000');
app.listen(apiPort, () => {
  console.log(`Server started on port ${apiPort}`);
})