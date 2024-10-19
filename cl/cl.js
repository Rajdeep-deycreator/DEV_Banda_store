document.getElementById('sub').addEventListener('click',function (){
  const ra=Math.random().toString();
  
  const d=document.getElementById("form");
  const div=document.createElement('div')
  
  d.appendChild(div);
  div.innerHTML = 'Copy and save your client code where you can access it:<br>'+ ra;
})