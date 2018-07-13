import express from 'express';
import controllers from './controllers';
import { mwBuilder, errorMiddleware } from './middlewares';

const app = express();

mwBuilder({ app });

app.use('/', controllers);

app.use(errorMiddleware);

export default app;
