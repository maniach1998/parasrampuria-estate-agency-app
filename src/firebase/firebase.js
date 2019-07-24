import * as firebase from 'firebase';

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// db.ref().set({
//   name: "New listing",
//   need: "Sell",
//   listingType: "1BHK",
//   onSale: true
// }).then(() => {
//   console.log("Done");
// }).catch(() => {
//   console.log("Something wrong happened");
// });

// db.ref('person').push({
//   name: "Manas",
//   age: 21,
//   location: {
//     city: "Mumbai",
//     country: "India"
//   }
// });

// db.ref('person').push({
//   name: "Aisha",
//   age: 21,
//   location: {
//     city: "Mumbai",
//     country: "India"
//   }
// });

// db.ref('person').push({
//   name: "Rahul",
//   age: 26,
//   location: {
//     city: "Alibaug",
//     country: "India"
//   }
// });

// db.ref('person').on('value', (snapshot) => {
//   const people = [];

//   snapshot.forEach((item) => {
//     people.push({id: item.key, ...item.val()});
//   })

//   console.log(people);
// });

// db.ref('onSale').remove().then(() => {
//   console.log('Removed');
// });

// db.ref().update({
//   name: "Naya ghar",
//   need: "Buy",
// });

// db.ref().on('value', (snapshot) => {
//   const {name, need, listingType, onSale} = snapshot.val();
//   console.log(`${name} is on ${need} at ${listingType}`);
// });