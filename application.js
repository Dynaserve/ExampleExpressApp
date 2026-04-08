const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.status(200);
  response.json({
    message: 'Hello from Hydron!',
    description: 'Spin up a live instance of your application in seconds. Simply connect your GitHub repository, select your branch, and Hydron takes care of the rest — installing dependencies, starting your app, and serving it on a secure public URL. Every time you push to GitHub, your instance automatically updates with the latest changes. Need your own domain? Add a custom domain and we\'ll handle the SSL certificate automatically. Monitor everything in real time with live logs, and manage your instances from your dashboard with full control over starting, stopping, and redeploying.',
    more: 'Visit https://dynaserve.io/hydron to learn more and get started today!'
  });
  console.log(`Request Made To / Route From: ${request.ip}`);
});

const PORT = process.env.PORT || '3000';
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Example Express App Is Running Live At: http://${HOST}:${PORT}, Use Ctrl + C To Terminate The Server.`);
});