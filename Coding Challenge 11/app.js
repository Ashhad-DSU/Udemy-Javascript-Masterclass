function calculate(){
    let p=parseInt(document.querySelector('#principalAmount').value) 

    let t = parseInt(document.querySelector('#timePeriod').value)

    let r = parseInt(document.querySelector('#interestRate').value)

    let SI = p*t*r/100

    document.querySelector('.interest').innerHTML+= SI
}

document.querySelector('.btn').addEventListener('click', calculate)