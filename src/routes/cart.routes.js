import { Router } from "express";
import { getCartById, deleteAndUpdateCartById, deleteCart, postCart, updateCartById } from "../controllers/cart.controllers.js";
import { purchaseCart } from "../controllers/orders.controllers.js";


const cartRouter = Router()

cartRouter.get('/:id', getCartById)

cartRouter.post('/', postCart)

cartRouter.post('/:cid/products/:pid', updateCartById);

cartRouter.delete('/:cid/products/:pid', deleteAndUpdateCartById);

cartRouter.delete('/:cid', deleteCart);

cartRouter.get('/:cid/purchase', purchaseCart)



export default cartRouter