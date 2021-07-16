//example adapter pattern 1

//mysterious original code
let cart = [
     {id: 0, name: 'banana', price: 120},
     {id: 1, name: 'orange', price: 222},
     {id: 2, name: 'grape', price: 111},
]

function Cart() {
     this.cart = cart
}


//Adapter

function CartAdapter() {
     const originCart = new Cart()

     const newCart = originCart.cart.map((item, index) => {
          return {
               id: index + 'adapter', name: item.name, price: item.price, quantity: index
          }
     })
     return newCart
}

const originCart = new Cart()
console.log(originCart.cart)
const cartAdapter = new CartAdapter()
console.log(cartAdapter)