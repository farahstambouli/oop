class Product {
    constructor(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem extends Product {
    constructor(id,name,price,quantity){
        super(id,name,price);
        this.quantity = quantity;
    }
    totalPrice(){
        let total = this.price * this.quantity;
        return total;
    }
}


 class shoppingCart{
    constructor(item1,item2,item3){
     this.items = [];
     this.items.push(item1,item2,item3);

     
    }
    totalOfItems(){
        let k =0;
        for(let i =0; i<this.items.length ; i++){
            k += this.items[i].quantity

        }console.log(`in this cart we have ${k} items`)
        return k
    }
    addItems(item){
        this.items.push(item);

    }
    removeItems(list){
        for(let i = 0;i<list.length;i++){
            for(let j=0;j<this.items.length;j++){
                if(list[i] === this.items[j]){
                    this.items.splice(j,1)
                    j-=1;
                }
            }
        }


    }
    displayCartItems(){
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i])
            
        }
 }
}
 let item1 = new ShoppingCartItem(1,'rouba',500,2);
let item2 = new ShoppingCartItem(2,'fancy heels',1200,2);
let item3 = new ShoppingCartItem(3,'sac',800,1);
;
//console.log(cart.items);
//cart.totalOfItems();
let item4=new ShoppingCartItem(4,'jeans',300,1);
let cart = new shoppingCart(item1,item2,item3);
cart.addItems(item4);
//console.log(cart.items);
//cart.removeItems([item1,item4]);
//console.log(cart.items);
cart.displayCartItems();


