const fs = require('fs');
const ndjson = require('ndjson');

let rainbows = [];
fs.createReadStream('rainbow.ndjson')
  .pipe(ndjson.parse())
  .on('data', function(obj) {
    rainbows.push(obj);
  });

let bicycles = [];
fs.createReadStream('bicycle.ndjson')
    .pipe(ndjson.parse())
    .on('data', function(obj) {
        bicycles.push(obj);
    });

const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

app.get('/rainbow', (request, response) => {
  const index = Math.floor(Math.random() * rainbows.length);
  response.send(rainbows[index]);
});

 app.get('/bicycle', (request, bicycleresponse) => {
    const index = Math.floor(Math.random() * bicycles.length);
    bicycleresponse.send(bicycles[index]);
  });

app.use(express.static('public'));