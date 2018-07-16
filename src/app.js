import express from 'express';
import controllers from './controllers';
import { mwBuilder, errorMiddleware } from './middlewares';
import db from './db';
import mongoose from './mongoDb';

const app = express();

mwBuilder({ app });

app.use('/', controllers);

app.use(errorMiddleware);

export default app;
