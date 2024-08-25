import express, { Application } from 'express';
import wordStats from './routes/wordStats';

const app: Application = express();

app.use(express.json());

app.use('/api/wordStat', wordStats);

export default app;
