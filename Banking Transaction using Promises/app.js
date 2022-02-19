function transact(transactionID, time){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Transaction: "+ transactionID + " is completed")
        resolve()}
        , time)
    })
}

function allTransactions(){
    transact(1,3000)
    .then(()=> transact(2,1000))
    .then(()=> transact(3,2000))
}
allTransactions()