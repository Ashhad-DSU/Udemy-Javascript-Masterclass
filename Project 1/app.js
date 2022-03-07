/*let slider= document.querySelector('.slider')

slider.addEventListener('input', ()=>{
    console.log(slider.value)
})
*/

let Pslider=document.querySelector('.Pslider')
let Pvalue = document.querySelector('.Pvalue')

let Rslider=document.querySelector('.Rslider')
let Rvalue = document.querySelector('.Rvalue')

let Nslider=document.querySelector('.Nslider')
let Nvalue = document.querySelector('.Nvalue')

let Ivalue = document.querySelector('.Ivalue')
let PIvalue=document.querySelector('.PIvalue')
let EMIvalue=document.querySelector('.EMIvalue')

Pslider.addEventListener('input', ()=>{
    Pvalue.innerHTML = "PKR " + Pslider.value
    calculateInterest();
})

Nslider.addEventListener('input', ()=>{
    Nvalue.innerHTML = Nslider.value + " Years"
    calculateInterest();
})

Rslider.addEventListener('input', ()=>{
    Rvalue.innerHTML =  Rslider.value + " %"
    calculateInterest();
})

function calculateInterest(){
    let interest= Pslider.value * Nslider.value * Rslider.value/100
    Ivalue.innerHTML = interest

    let totalAmount = parseFloat(Pslider.value) + parseFloat(interest)
    PIvalue.innerHTML= "PKR " + totalAmount

    let months = parseInt(Nslider.value)*12
    let EMI = parseInt(totalAmount/months)
    EMIvalue.innerHTML = EMI + " Per Month"
}