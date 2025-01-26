var user=sessionStorage.getItem("i");
console.log(user);
var name;
fs.collection('users').doc(user).get().then((doc)=>{
  if(doc.exists){
    console.log("present")
    var d=doc.data();
   console.log(d.n)
    if (d){
      var ht=document.getElementById('to');
      ht.innerHTML += d.n
    }
  }
  
  
})

