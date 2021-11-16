import initializeApp from 'https://www.gstatic.com/firebasejs/9.4.1/firebase-app-compat.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.4.1/ firebase-firestore.js'


// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
    apiKey: "uTaioLQnMYpd4sDnCCJn",
    authDomain: "web-lab3-a594c.firebaseapp.com",
    // For databases not in the us-central1 location, databaseURL will be of the
    // form https://[databaseName].[region].firebasedatabase.app.
    // For example, https://your-database-123.europe-west1.firebasedatabase.app
    databaseURL: "https://web-lab3-a594c.firebaseio.com",
    storageBucket: "web-lab3-a594c.appspot.com"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);


// Get a list of cities from your database
async function getCities(db) {
    const citiesCol = collection(db, 'log');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

console.log(getCities(database));