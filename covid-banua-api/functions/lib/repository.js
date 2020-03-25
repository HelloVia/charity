const admin = require('firebase-admin');
const axios = require('axios');
// const FileSync =  require('lowdb/adapters/FileSync');
// // const adapter = new FileSync('db.json');
// const db = low(adapter);

var serviceAccount = require("../certificate.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://covid-borneo-api.firebaseio.com"
});

var db = admin.firestore()
var docRef = db.collection('corona').doc('documents')
docRef.set({cities:[], totals:{}})

const insertCaseAndCities = (totals, cities) => {

}
module.exports = docRef