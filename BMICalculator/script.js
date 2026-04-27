 const form=document.querySelector('form') 
    // console.log(form);
    form.addEventListener('submit',function(e){
        e.preventDefault()
        const height=parseFloat(document.querySelector('#height').value)
        const weight=parseFloat(document.querySelector('#weight').value)
        const result=document.querySelector('#result')

        if(height===''||height<0||isNaN(height)){
            result.innerHTML="Enter Valid Height"
        }
        else if(weight===''||weight<0||isNaN(weight)){
            result.innerHTML="Enter Valid weight"
        }
        else{
            const bmi=weight/(height**2)
            result.innerHTML=`Your BMI : ${bmi}`
            result.style.backgroundColor="white"
            result.style.padding="20px"
            
        }
    
        
        
    })