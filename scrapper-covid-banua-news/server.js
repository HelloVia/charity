const express = require('express')
const repo = require('./lib/repository')
const runScrapper = require('./lib/scrapper');
const cors = require('cors')
require('./lib/cron');


const app = express();
app.use(cors());

app.get(`/scrape`, async (req, res, next) => {
  runScrapper()
  const { totals, cities } = repo.db.value();
  
  // respond with json
  res.json({ totals, cities });
});

app.get(`/data`, async (req, res, next) => {
  // get the scrape data
  const { totals, cities } = repo.db.value();
  // respond with json
  res.json({ totals, cities });
});

app.listen(8080, () => {
  console.log(`Example App running on port http://localhost:2093`);
});