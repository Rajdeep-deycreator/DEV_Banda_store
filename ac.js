

var difine=sessionStorage.getItem("i")
console.log(difine);

fs.collection('users').doc(difine).get().then((us)=>{
  if(us.exists){
    var dafu=us.data();
    var nd=document.getElementById('da');
    nd.innerHTML=dafu.n;
 
  }
})
fs.collection('orders').doc(difine).get().then((uss)=>{
  if(!uss.exists){
    console.log("no")
    var boele=document.getElementById('bo');
    boele.innerHTML='Currently You dont have any active services'
   
    boele.innerHTML+='<a href="/reg/reg.html">Avail a service</a><br><a href="/pricing.html">Pricing</a>'
  }
})