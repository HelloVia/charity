// Setup the DB
const low = require('lowdb');

const FileSync =  require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({totals:{},cities:[]}).write();

const insertCaseAndCities = (totals, cities) => {
  db.set('totals',totals)
    .write();
  db.update('cities', _c => cities)
    .write();
  console.log('Done!');
}
module.exports = {
    db,
    insertCaseAndCities
}