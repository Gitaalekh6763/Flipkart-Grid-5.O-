const asyncHandler = require('express-async-handler');
const Coupon = require('../models/coupon');
const Order = require('../models/order');


const addcoupon = asyncHandler( async (req, res) => {


    const { name, discription, coins } = req.body;

    try {
        var newCoupon = {
            name,
            discription,
            coins
        }
        var coupon = await Coupon.create(newCoupon);
        if( coupon ) {
            res.send(201);
        }
    } catch (error) {
        res.status(400);
        console.log("Error");
        throw new Error(error.message);
    }
});

const getcoupons = asyncHandler( async (req, res) => {

    try {
        const coupons = await Coupon.find({});
        // console.log(products);
        res.json(coupons);
        // res.send(JSON.stringify(products));
        // res.json("hello")
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});


const changeOrderStatus = asyncHandler(async (req,res)=>{
    const { orderId } = req.body;

    try{
        const order = await Order.findById(orderId);
        order.status = "Completed"
        order.save();
        res.send(201);
    } catch(error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

// const findCoins = asyncHandler(async ())

module.exports = {addcoupon, getcoupons, changeOrderStatus}