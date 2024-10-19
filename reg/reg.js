// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBepuQwAF8M6aoB_MaHf2toL1YFGscawZk",
  authDomain: "services-5f80d.firebaseapp.com",
  projectId: "services-5f80d",
  storageBucket: "services-5f80d.appspot.com",
  messagingSenderId: "224066277556",
  appId: "1:224066277556:web:dcd8c243723e86ccc687e1",
  measurementId: "G-R8M6D9VQG9"
};
const app=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

document.getElementById('submit').addEventListener('click',function (){
  event.preventDefault();
  const formdata={
  name:document.getElementById('name').value,email:document.getElementById('email').value,phone:document.getElementById('phno').value,
  clid:document.getElementById('clid').value
  };
  db.collection('data').add(formdata).then(() =>{
    alert('data sent');
  }).catch((error) => {
    alert(error);
  })
})
