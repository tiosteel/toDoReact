import indexRoutes from './routes/indexRoutes';
import path from 'path';
import express from 'express';

const app = express();
app.use('^/$', indexRoutes);

app.use(express.static(path.resolve(__dirname, '../build')));

app.listen(80, () => console.log(`Server running on port 80`));