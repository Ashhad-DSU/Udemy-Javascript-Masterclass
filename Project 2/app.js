let productinput = document.querySelector('.productInput')
let addButton = document.querySelector('.addButton')

let priceInput = document.querySelector('.priceInput')
let quantityInput = document.querySelector('.quantityInput')
//let priceInput = document.querySelector('.priceInput')

let cart=[]
if(localStorage.cart){
    cart= JSON.parse(localStorage.cart)  //Converts the String elements into array elements
}

addButton.addEventListener('click', ()=>{
    for (let i in cart){
        if (productinput.value === cart[i].Product){        //if the product already exist in the list, we can simply add up the new quantity into the previous one
            cart[i].Quantity = parseInt(cart[i].Quantity) + quantityInput.value
            localStorage.cart = JSON.stringify(cart)
            location.reload()
        }
    }
    localStorage.clear()
    console.log(productinput.value)
    let item ={Product: productinput.value, Price:priceInput.value, Quantity: quantityInput.value} //item => name of variable ; Product => Property of the variable
    cart.push(item)
    localStorage.cart= JSON.stringify(cart) //Stringify() allows to convert array elements into string elements
    console.log(localStorage)
    location.reload()
})

function displayCart(){
    let productList =document.querySelector('.productList') 
    for (let i in cart){
        let item=cart[i]
        let listItem = document.createElement('li')
        listItem.innerHTML = "Product Name : " + item.Product  + " Product Price: " + item.Price + " Product Quantity: " + item.Quantity    //item.Product will give access to the Product as well
        productList.appendChild(listItem) //Used AppendChild() to append the "listItem" in the list.
    
    }
}

displayCart()