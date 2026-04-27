 const clock=document.querySelector('#clock')
    
//    console.log(date.toLocaleTimeString());
//to repeat after interval of time
setInterval(function(){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString()
},1000)