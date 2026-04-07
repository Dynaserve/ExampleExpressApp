const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.status(200);
    response.json({ 
        message: 'Hello from Hydron!'
     });
});

const PORT = process.env.PORT || '3001';
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`API Is Running Live At: http://${HOST}:${PORT}, Use Ctrl + C To Terminate The Server.`);
});