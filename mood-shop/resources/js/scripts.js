import data from './data.js'

const itemsContainer = document.getElementById('items')

for (let i=0; i<data.length; ++i) {
    // create a new div element and give it a class name
    let newDiv = document.createElement('div');
    newDiv.className = 'item'

    // create an image element
    let img = document.createElement('img');
    // this will change each time we go through the loop. Can you explain why?
    img.src = data[i].image
    img.width = 300
    img.height = 300

    //create a paragraph element for both description and price to be displayed.
    let desc = document.createElement('p');
    let price = document.createElement('p');
    desc.innerText = data[i].desc
    price.innerText = data[i].price


    // Add the image to the div
    newDiv.appendChild(img)
    newDiv.appendChild(desc)
    newDiv.appendChild(price)

    let button = document.createElement('button')
    button.id = data[i].name

    // creates a custom attribute called data-price. That will hold price for each element in the button
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)

    itemsContainer.appendChild(newDiv)
}

const cart = []

function addItem(name,price){

    for (let i = 0; i < cart.length; i += 1){
        if (cart[i].name === name){
            cart[i].qty += 1
            return
        }
    }



    const item = {name, price, qty: 1 }
    cart.push(item)
}

function showItems(){
//Template Strings have to have grave accent characters: `` and not single quotes ''
    const qty = getQty()
    console.log(`You have ${qty} items in your cart`)
    for(let i = 0; i < cart.length; i += 1){
        console.log(`- ${cart[i].name } $${cart[i].price} x ${cart[i].qty} `)

    }
    const total = getTotal()
    console.log(`Total in cart: $${total.toFixed(2)}`)

    function getQty() {
        let qty = 0
        for (let i = 0; i < cart.length; i += 1){
            qty += cart[i].qty
        }
        return qty
    }

    function getTotal(){
        let total = 0
        for(let i = 0; i < cart.length; i += 1){
            total += cart[i].price * cart[i].qty
        }
        return total
    }
}

addItem("Apple",0.99)
addItem("Orange",2.50)
addItem("Banana",5.00)
addItem("Apple",0.99)

showItems()

