// btn strat

var btn1=document.getElementById("btn-1")


btn1.addEventListener('click',()=>{
    // btn1.textContent="item added"
    // btn1.style.backgroundColor="red"
    
    
})



var btn2=document.getElementById("btn-2")


btn2.addEventListener('click',()=>{
    // btn2.textContent="item added"
    // btn2.style.backgroundColor="red"
    
})



var btn3=document.getElementById("btn-3")


btn3.addEventListener('click',()=>{
    // btn3.textContent="item added"
    // btn3.style.backgroundColor="red"
    
})



var btn4=document.getElementById("btn-4")


btn4.addEventListener('click',()=>{
    // btn4.textContent="item added"
    // btn4.style.backgroundColor="red"
    
})




var btn5=document.getElementById("btn-5")


btn5.addEventListener('click',()=>{
    // btn5.textContent="item added"
    // btn5.style.backgroundColor="red"
    
})



var btn6=document.getElementById("btn-6")


btn6.addEventListener('click',()=>{
    // btn6.textContent="item added"
    // btn6.style.backgroundColor="red"
    
})




var btn7=document.getElementById("btn-7")


btn7.addEventListener('click',()=>{
    // btn7.textContent="item added"
    // btn7.style.backgroundColor="red"
    
})



var btn8=document.getElementById("btn-8")


btn8.addEventListener('click',()=>{
    // btn8.textContent="item added"
    // btn8.style.backgroundColor="red"
    
})




var btn9=document.getElementById("btn-9")


btn9.addEventListener('click',()=>{
    // btn9.textContent="item added"
    // btn9.style.backgroundColor="red"
    
})


var btn10=document.getElementById("btn-10")


btn10.addEventListener('click',()=>{
    // btn10.textContent="item added"
    // btn10.style.backgroundColor="red"
    
})



var btn11=document.getElementById("btn-11")


btn11.addEventListener('click',()=>{
    // btn11.textContent="item added"
    // btn11.style.backgroundColor="red"
    
})


var btn12=document.getElementById("btn-12")


btn12.addEventListener('click',()=>{
    // btn12.textContent="item added"
    // btn12.style.backgroundColor="red"
    
})


// btn end

// sign in

var signin =document.getElementById("signin_btn")
signin.addEventListener('click',()=>{
    let=result=confirm("pls ! turn on your location")

})

var signup =document.getElementById("signup_btn")
signup.addEventListener('click',()=>{
    let=result=confirm("pls ! turn on your location")

})

// end sign in


// alert



var succes_alert=document.getElementById('success-alert')
var buynow1 =document.getElementById('buynow1')

buynow1.addEventListener('click',()=>{
    var confirmation=confirm('confirmation alert')
    console.log("clicked");
    succes_alert.style.display='block'
    buynow1.style.backgroundColor='red'
})




var buynow2=document.getElementById('buynow2')

buynow2.addEventListener('click',()=>{
    var confirmation=confirm('confirmation alert')
    console.log("clicked");
    succes_alert.style.display='block'
    buynow2.style.backgroundColor='red'
})



var buynow3 =document.getElementById('buynow3')

buynow3.addEventListener('click',()=>{
    var confirmation=confirm('confirmation alert')
    console.log("clicked");
    succes_alert.style.display='block'
    buynow3.style.backgroundColor='red'
})



var buynow4=document.getElementById('buynow4')

buynow4.addEventListener('click',()=>{
    var confirmation=confirm('confirmation alert')
    console.log("clicked");
    succes_alert.style.display='block'
    buynow4.style.backgroundColor='red'
})



var buynow5 =document.getElementById('buynow5')

buynow5.addEventListener('click',()=>{
    var confirmation=confirm('confirmation alert')
    console.log("clicked");
    succes_alert.style.display='block'
    buynow5.style.backgroundColor='red'
})



var buynow6 =document.getElementById('buynow6')

buynow6.addEventListener('click',()=>{
    var confirmation=confirm('confirmation alert')
    console.log("clicked");
    succes_alert.style.display='block'
    buynow6.style.backgroundColor='red'
})



var buynow7 =document.getElementById('buynow7')

buynow7.addEventListener('click',()=>{
    var confirmation=confirm('confirmation alert')
    console.log("clicked");
    succes_alert.style.display='block'
    buynow7.style.backgroundColor='red'
})



var buynow8=document.getElementById('buynow8')

buynow8.addEventListener('click',()=>{
    var confirmation=confirm('confirmation alert')
    console.log("clicked");
    succes_alert.style.display='block'
    buynow8.style.backgroundColor='red'
})



var buynow9 =document.getElementById('buynow9')

buynow9.addEventListener('click',()=>{
    var confirmation=confirm('confirmation alert')
    console.log("clicked");
    succes_alert.style.display='block'
    buynow9.style.backgroundColor='red'
})



var buynow10 =document.getElementById('buynow10')

buynow10.addEventListener('click',()=>{
    var confirmation=confirm('confirmation alert')
    console.log("clicked");
    succes_alert.style.display='block'
    buynow10.style.backgroundColor='red'
})



var buynow11 =document.getElementById('buynow11')

buynow11.addEventListener('click',()=>{
    var confirmation=confirm('confirmation alert')
    console.log("clicked");
    succes_alert.style.display='block'
    buynow11.style.backgroundColor='red'
})

var buynow12 =document.getElementById('buynow12')

buynow12.addEventListener('click',()=>{
    var confirmation=confirm('confirmation alert')
    console.log("clicked");
    succes_alert.style.display='block'
    buynow12.style.backgroundColor='red'
})


// end alert



/**********quanity*********/

// Get the quantity input element
var quantityInput = document.getElementById("quantity");

//  decrease the quantity
function decreaseQuantity() {
    var currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
}

// increase the quantity
function increaseQuantity() {
    var currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
}




// *******end quantity*********/