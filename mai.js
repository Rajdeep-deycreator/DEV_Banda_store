
const firebaseConfig = {
  apiKey: "AIzaSyBepuQwAF8M6aoB_MaHf2toL1YFGscawZk",
  authDomain: "services-5f80d.firebaseapp.com",
  projectId: "services-5f80d",
  storageBucket: "services-5f80d.firebasestorage.app",
  messagingSenderId: "224066277556",
  appId: "1:224066277556:web:dcd8c243723e86ccc687e1",
  measurementId: "G-R8M6D9VQG9"
};

firebase.initializeApp(firebaseConfig);
const fs=firebase.firestore();
const auth=firebase.auth();
const stor=firebase.storage()
const analytics=firebase.analytics();
var id;
sessionStorage.setItem("fs",fs)
sessionStorage('firecon',firebaseConfig)


function newuser() {
  const email = document.getElementById("user").value;
  const password = document.getElementById("pass").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      const userId = cred.user.uid;

      const userData = {
        n: document.getElementById('n').value,
        ph: document.getElementById('nnu').value
      };

      return fs.collection('users').doc(userId).set(userData);
    })
    .then(() => {
      alert("User account successfully created!");
      window.location.href="index.html"
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}
function sub() {
  const email = document.getElementById('user').value;
  const pass = document.getElementById('pass').value;

  auth.signInWithEmailAndPassword(email, pass)
    .then((creden) => {
      alert('Logged in');
      const uid = creden.user.uid;
      id=uid;
      if(id){
        sessionStorage.setItem('i',id);
      }
      console.log('User ID after login:', uid);
      window.location.href='home.html'

    })
    .catch((error) => {
      alert('Authentication Error: check weather your password or email is correct', error.message);
    });
}
