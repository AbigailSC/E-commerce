import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import cookieParser from 'cookie-parser';
import { swaggerDefinition } from '@config/swagger.config';
import { connection } from '@config/db.donfig';
import indexRoute from '@routes/index.routes';
dotenv.config();

const specs = swaggerJsdoc(swaggerDefinition);

export const app: express.Application = express();

const { PORT } = process.env;

void connection();

// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing, @typescript-eslint/strict-boolean-expressions
app.set('port', PORT || 4000);

const { ORIGIN_URL } = process.env;

const whiteList = [ORIGIN_URL];

app.use(
  cors({
    origin: function (origin, cb) {
      if (origin === undefined) {
        return cb(null, true);
      }
      if (whiteList.includes(origin)) {
        return cb(null, origin);
      }
      return cb(new Error('Not allowed by CORS'));
    }
  })
);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use('/api', indexRoute);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
