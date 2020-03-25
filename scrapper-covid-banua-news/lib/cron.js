const cron = require('cron')
const runScrapper = require('./scrapper');

const job = cron.job('*/3 * * * *', () => {
    runScrapper()
    console.log("Message every minute")
})
job.start()