const links={
  acc:'/ac.html'
}
var ifrsrc;
var ifr;

function sr(){
  ifr=document.getElementById("frame")
  ifrsrc=ifr.src
  console.log(ifrsrc);
}
function menu() {
  var diii=document.createElement('div');
  if (diii){
    console.log('created')
  }else{
    console.log('not created');
  }

  var close=document.createElement('input');
  close.type="button"
  close.value='Close';
  close.style.position="relative";
  close.style.left="60%";
  
  close.onclick=function () {
    diii.remove();
  }
  diii.innerHTML+="DEV Banda";
  
  diii.style.position="fixed";
  diii.style.top="0%";
  diii.style.left="0%";
  diii.style.height="1000px";
  diii.style.width='60vw';
  diii.style.backgroundColor="#FFFFFF";
  var logo=document.createElement("div");
  logo.style.backgroundImage="url('bck.jpg')";
  logo.style.backgroundRepeat="no-repeat";
  logo.style.backgroundSize="cover";
  logo.style.height="50px";
  logo.style.width="50px";
  logo.style.borderRadius="50%";
 
 
  var byfst=document.createElement('input');
  byfst.type="button";
  byfst.onclick=function () {
    
    sr();
    ifr.src=links.acc;
    sr();
  
  }
  byfst.value="My Account";
  byfst.style.position = 'relative';
  byfst.style.margin = '9px';
  byfst.style.borderWidth='2px';
  byfst.style.borderColor="#BD00FF";
  byfst.style.fontSize="20px"
  byfst.style.height="4%";
  byfst.style.width="80%";
  byfst.style.position="relative";

  
  diii.appendChild(close)  ;
  diii.appendChild(logo);
  diii.appendChild(byfst);
  document.body/*getElementById("to;")*/.appendChild(diii)
  
}