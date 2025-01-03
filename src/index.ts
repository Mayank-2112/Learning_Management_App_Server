import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as dynamoose from 'dynamoose';

dotenv.config();
const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
  dynamoose.aws.ddb.local();
}

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 3000;
if(!isProduction) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}