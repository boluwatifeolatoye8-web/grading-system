function secondary(){
    let input= document.getElementById('secondaryInput').value
    let displayArea= document.getElementById('secondaryDisplay')

if ( input <0 || input > 100){
    alert('Invalid score')
    input= Number(input)
}
if(input >=70 && input <=100
){
displayArea.innerHTML= `<p>Excellent😍</p>`
}else if(input>=60 && input<=69){
    displayArea.innerHTML= `<p>very good😊</p>`
}else if(input>= 50 && input<=59){
    displayArea.innerHTML= `<p>Good🤗</p>`
}
else if(input>= 40 && input<=49){
    displayArea.innerHTML= `<p>Fair😔</p>`
}
else if(input>= 0 && input<=39){
    displayArea.innerHTML= `<p>Poor🥹</p>`
}
}


function polytechnic(){
    let input= document.getElementById('polytechnicInput').value
    let displayArea = document.getElementById('polytechnicDisplay')
    input = Number(input)

    if (input === ''){
        // alert('please enter your cgpa')
        displayArea.innerHTML = 'please enter your '
    }else if (input >=3.50 && input < 4.00){
    displayArea.innerHTML=`<p> Distinction 😍</p>`
  }else if(input >=3.00 && input < 3.49){
    displayArea.innerHTML=`<p> Upper Credit 😊</p>`
  }else if(input >=2.50 && input < 2.99){
    displayArea.innerHTML=`<p> Lower Credit 😔</p>`
  } else if(input >=2.00 && input < 2.49){
    displayArea.innerHTML =`<p> Pass 🥹</p>`
  }else if(input >=0.00 && input <1.99){
     displayArea.innerHTML +=`<p> fail/probation😠</p>`
    }else{
      // alert('invalid CGPA')
      displayArea.innerHTML = 'INVALID INPUT'
    }
}
function University(){
    let input= document.getElementById('universityInput').value
    let displayArea =  document.getElementById('universityDisplay')

    if (input <0 ||input> 5.0){
        alert('invalid cgpa')
    }
    input= Number(input)
  if (input >=4.50 && input <= 5.00){
    displayArea.innerHTML=`<p> First Class 😍</p>`
  }else if(input >=3.50 && input <=4.49){
    displayArea.innerHTML =`<p> Second class Upper😊</p>`
  }else if(input >=2.40 && input <=3.49){
    displayArea.innerHTML =`<p> Second Class Lower 🤗</p>`
  }else if(input >=1.50 && input <=2.39){
    displayArea.innerHTML =`<p> Third class😔</p>`
  }else if(input >=1.00 && input <=1.49){
    displayArea.innerHTML =`<p> Pass 🥹</p>`
  }else if(input >=0.00 && input <=0.99){
    displayArea.innerHTML =`<p> Fail 😭</p>`
  }

}

 