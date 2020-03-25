// Package Dependencies
const puppeteer = require('puppeteer');

// Local Dependencies
const {insertCaseAndCities} = require('./repository')
// Primitive Constants
const WEBSITE_TARGET = 'http://covid19.kopibanjarmasin.com/covidkalsel.php'

// Selector Constants
const $containerSelector = ".mengantisipasi > .anticipate > .container > .content-area >"
const $casesSelector = ".content-list > .list-flat .col-6 .desc"
const $citySelector = ".list-flat .col-6 .desc"

/**
 * Create city object based on name and total
 * @param {string} cityName 
 * @param {total} total 
 */
const createCityData = (name, total) => ({
    name,
    total
});

const setLabelAndValueFromProperties = async ($properties, cb) => {
    for (const $prop of $properties) {
        // Get label and value
        const label = await $prop.$eval('h5:nth-child(1)', i => i.innerHTML);
        const value = await $prop.$eval('h5:nth-child(2)', i => i.innerHTML);
    
        cb(label, value)
      }
}
const runCron = async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let results = {totals:{},cities:[]};
    console.log("jalan")
    await page.goto(WEBSITE_TARGET);
  
     let $cases = await page.$$(`${$containerSelector} ${$casesSelector}`)
     let $cities = await page.$$(`${$containerSelector} ${$citySelector}`);
  
     await setLabelAndValueFromProperties($cases, (label, value) => results.totals[label] = value)
     await setLabelAndValueFromProperties($cities, (label, value) => results.cities.push(createCityData(label, value)))
  
     insertCaseAndCities(results.totals, results.cities)
  
    await browser.close();
}

module.exports = runCron