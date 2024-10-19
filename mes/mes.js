const firebaseConfig = {
  apiKey: "AIzaSyBepuQwAF8M6aoB_MaHf2toL1YFGscawZk",
  authDomain: "services-5f80d.firebaseapp.com",
  projectId: "services-5f80d",
  storageBucket: "services-5f80d.appspot.com",
  messagingSenderId: "224066277556",
  appId: "1:224066277556:web:dcd8c243723e86ccc687e1",
  measurementId: "G-R8M6D9VQG9"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById('sub').addEventListener('click', function() {
  const collectionName = document.getElementById("cl").value;
  const dtac = document.getElementById('da');
  dtac.innerHTML = '';

  db.collection(collectionName).onSnapshot((querySnapshot) => {
    if (querySnapshot.empty) {
      dtac.innerHTML = "No messages found.";
    } else {
      querySnapshot.forEach((doc) => {
        var entry = doc.data();
        var endv = document.createElement('div');
        endv.innerHTML = `Name: ${entry.name || 'Unnamed'}<br>Email: ${entry.email || 'No email provided'+entry.I}`;
        dtac.appendChild(endv);
      });
    }
  }, (error) => {
    console.error("Error fetching documents: ", error);
    dtac.innerHTML = `Error fetching documents: ${error.message}`;
  });
});