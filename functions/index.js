const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

 exports.deleteTokens = functions.https.onRequest((request, response) => {

    const collectionRef = db.collection('tokens');

    var promises = [];

    return collectionRef.get()
    .then(qs => {
       qs.forEach(docSnapshot => {
         promises.push(docSnapshot.ref.delete());
       });
       response.send("Hello from Firebase!");
       return Promise.all(promises);
    })
    .catch(error => {
        console.log(error);
        return false; 
    });
});