//Create an object class for the product to store the properties for id, name and price of the product.
class Product {
    constructor(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

///Create an object class for the shopping cart item to store the properties for product and its quantity.
class ShoppingCartItem{
    constructor(product,quantity){
        this.product = product;
        this.quantity = quantity;
    }
    //To the preceding object class, add the method to calculate the total price of the item.
    getTotalPrice(){
        return this.product.price * this.quantity;
    }
}

//Create another object class for the shopping cart which contains an array of ShoppingCartItem instances. 
class ShoppingCart{
    constructor(){
        this.item=[];
    }
    //add the method to add an item to the cart.
    addItem(product,quantity){
        const existingItem = this.item.find(item=> item.product.id === product.id);
        if(existingItem){
            existingItem.quantity+=quantity;
        }else{
            this.item.push(new ShoppingCartItem(product,quantity));
        }
    }
    //add the method to remove an item from the cart.
    removeItem(product){
        return this.item = this.item.filter(item=> item.product.id !== product.id);
    }

    //add the method to calculate the total price of the cart.
    getTotal(){
        return this.item = this.item.reduce((total,item)=>{total + item.getTotalPrice()},0);
    }

    // add the method to display the items in the cart.
    displayItems(){
        return this.item.map(item=> ({
            productId: item.product.id,
            name: item.product.name,
            quantity: item.quantity,
            totalPrice: item.getTotalPrice()
        }));
    }
}

//Go on to test the ability of our objects
//Create products
const product1 = new Product(1,'sabat',100);
const product2 = new Product(2,'pull',50);
const product3 = new Product(3,'sirwel',150);

//Create a shopping cart
const cart = new ShoppingCart();

//Add items to the cart

cart.addItem(product1,1);//add one sabat
cart.addItem(product2,2);//add two pull
cart.addItem(product3,1);//add one sirwel

//Display the cart
console.log(cart.displayItems());

//Remove an item from the cart
cart.removeItem(product2);

//verify the cart
console.log(cart.displayItems());



