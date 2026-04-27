  function putColor() {
    const theme = document.querySelectorAll('.theme')
    theme.forEach((ele)=>{
       ele.style.backgroundColor = ele.id
      ele.style.borderStyle="dashed"
      
    })
  }
putColor()

const theme=document.querySelectorAll('.theme')
const body=document.querySelector('body')
// console.log(theme)
theme.forEach(function(t){
   console.log(t);
 
 t.addEventListener('click',function (e) {
  // console.log(e.target);
  // console.log(e);
  if(e.target.id=='black'){
    body.style.backgroundColor=e.target.id
    body.style.color="white"
  } else if(e.target.id=='purple'){
    body.style.backgroundColor=e.target.id
    body.style.color="white"
  }
  else if(e.target.id=='white'){
    body.style.backgroundColor=e.target.id
    body.style.color="black"
  }
  else if(e.target.id=='aquamarine'){
    body.style.backgroundColor=e.target.id
    body.style.color="black"
  }
  else if(e.target.id=='green'){
    body.style.backgroundColor=e.target.id
    body.style.color="black"
  }
  
  
 })
  

});