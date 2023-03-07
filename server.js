const express = require('express');
const app = express();
const port = 3000;
const base = `${__dirname}/public`;
const cors=require("cors");
app.use(express.static('public'));
app.use(cors());


app.get('/', function (req, res) {
  res.sendFile(`${base}/device-list.html`);
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
app.get('/register-device', (req, res) => {
  res.sendFile(`${base}/register-device.html`);
});

app.get("/send-command", (req, res) => {
  res.sendFile(`${base}/send-command.html`);
});

app.get('/iot-applications', (req, res) => {
  res.sendFile(`${base}/iot-applications.html`);
});
app.get('*', (req, res) => {
  res.sendFile(`${base}/404.html`);
});
app.get('*', (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials","true");
  res.send("API is running");
});
