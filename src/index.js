import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your shopee cart!");

const item1 = await createItem("Alexa", 450, 1);
const item2 = await createItem("Echo", 350, 1);

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
await cartService.removeItem(myCart, item2);
await cartService.displayCart(myCart);

console.log("Shopee cart total is:");
await cartService.calculateTotal(myCart);