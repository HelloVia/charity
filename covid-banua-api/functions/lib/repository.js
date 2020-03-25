const admin = require('firebase-admin');
const axios = require('axios');
// const FileSync =  require('lowdb/adapters/FileSync');
// // const adapter = new FileSync('db.json');
// const db = low(adapter);

var serviceAccount = require("../covid-borneo-api-c41c5-firebase-adminsdk-u6q0j-fbcb8b89e3.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://covid-borneo-api-c41c5.firebaseio.com"
});

var db = admin.firestore()
var docRef = db.collection('corona').doc('documents')
docRef.set({cities:[], totals:{}})

const insertCaseAndCities = (totals, cities) => {
//   db.set('totals',totals)
//     .write();
//   db.update('cities', _c => cities)
//     .write();
//     axios({
//         method: 'put',
//         url: 'https://api.myjson.com/bins/akjak',
//         data: {
//           cities,
          
//         }
//       });
//   console.log('Done!');
}
module.exports = docRef