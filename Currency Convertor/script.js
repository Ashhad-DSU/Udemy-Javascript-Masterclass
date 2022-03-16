let usd=document.querySelector('.usd')
let pkr=document.querySelector('.pkr')
let convert=document.querySelector('.convert')
let donation = document.querySelector('.donation')

usd.addEventListener('click', ()=>{
    convert.innerHTML = "That will be PKR " + donation.value 
    convertor();
})

function convertor(){
    let convertValue = parseFloat(donation.value) * 179.84
    convert.innerHTML = "That will be PKR " + convertValue
}