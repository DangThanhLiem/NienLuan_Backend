import userModel from "../models/userModel.js";

//add items to user cart
const addToCart = async (req, res) => {
    try{
        let userData = await userModel.findById(req.body.user_id);
        let cartData = userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.user_id,{cartData});
        return res.json({success:true,message:"Item added to cart"});
    }catch(error){
        console.log(error);
        return res.json({success:false,message:"Error in adding to cart"});
    }
}

//remove items from user cart
const removeFromCart = async (req, res) => {
    const {food_id} = req.body;
    const user_id = req.user._id;
}

//fetch user cart data
const getCart = async (req, res) => {
    const user_id = req.user._id;
}

export {addToCart, removeFromCart, getCart};
