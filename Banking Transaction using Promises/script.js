let balance = 1000
function validate(){
    let username = 'admin'
    let password = 'admin'
    return new Promise((resolve,reject)=>{
        if(username ==='admin' & password ==='admin'){
            resolve(balance)
        } else {
            reject('Invalid username and Password, please re-enter')
        }
    })
}

function withdraw(){
    let withdrawAmount = 200
    return new Promise((resolve, reject)=> {
        if(balance> withdrawAmount){
            balance-= withdrawAmount
            resolve(balance)
        }else{
            reject('Insufficient Balance, cannot complete transactions!')
        }
    })
}

validate()
.then((balance)=>{
    withdraw()
    .then((balance)=>console.log('The New balance is : '+ balance))
    .catch((message)=>console.log(message))
})
.then((balance)=>console.log(balance))
.catch((message)=>console.log(message))
