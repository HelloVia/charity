const cron = require('cron')
const runScrapper = require('./scrapper');
const repository = require('./repository');

const job = cron.job('*/5 * * * *', async () => {
   await runScrapper(repository)
   console.info("")
})
job.start()