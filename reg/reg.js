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
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
var userrrr=sessionStorage.getItem('i');
var name;
var phno;
document.getElementById('submit').addEventListener('click', function() {
      event.preventDefault()
db.collection('users').doc(userrrr).get().then((datata)=>{
  if(datata.exists){
    var datatata=datata.data();
    name=datatata.n;
    phno=datatata.ph;
    var foum=document.getElementById('form')
    foum.innerHTML+='<br>Name:'+name+'<br>Ph no.'+phno;
    foum.style.color='#FFFFFF';
  }
  else{
    alert('you are not registered ');
  }
})

  const formdata={
  name:name,phone:phno
  };
  db.collection('data').set(formdata).then(() =>{
    alert('data sent');
  }).catch((error) => {
    alert(error);
  })
})
