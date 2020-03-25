const firebase = require('firebase-functions')
const express = require('express')
const repository = require('./lib/repository')
const runScrapper = require('./lib/scrapper');
const cors = require('cors')

// require('./lib/cron');

const app = express();
app.use(cors());

app.get(`/scrape`, async (_req, res, _next) => {
  let results = await runScrapper(repository)
  res.send(results).status(200)
});

app.get(`/data`, async (_req, res, _next) => {
  let results = await repository.get().then(function(doc) {
    if (doc.exists) {
        return doc.data()
    }else {
        return ({cities:[], totals:{}})
    }});
  res.json(results).status(200)
});

exports.app =  firebase.https.onRequest(app);