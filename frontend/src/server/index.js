import path from 'path';
import express from 'express';

import htmlMiddleware from './middleware/html';
import renderMiddleware from './middleware/render';

const publicPath = path.normalize(path.join(__dirname, '/public'));
console.dir(publicPath);
const app = express();

app.use(express.static(publicPath));
app.use(htmlMiddleware());
app.use(renderMiddleware());

export default app;
