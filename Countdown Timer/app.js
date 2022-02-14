let time = 10
let t= document.querySelector('h2')

let counter = setInterval(function(){
    time = time-1
    t.innerHTML = time
    console.log(time)
    if (time==0){
        clearInterval(counter)
        t.innerHTML= 'TIME UP!'
    }
}, 1000)