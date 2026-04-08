import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"

//Placing orders using COD method
const placeOrder = async (req, res) => {
    try {

        const { userId, items, amount, address } = req.body

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, { cartData: {} })

        res.json({ success: true, message: "Order Placed" })


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//Placing orders using stripe methodd
const placeOrderStripe = async (req, res) => {

}

//Placing orders using razorpay method
const placeOrderRazorpay = async (req, res) => {

}

// all orders data for admin panel
const allOrders = async () => {

    try {

        const orders = await orderModel.find({})

        res.json({ success: true, orders })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// user order data for frontend
const userOrder = async (req, res) => {

    try {

        const { userId } = req.body

        const orders = await orderModel.find({ userId })
        res.json({ success: true, orders })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// update order status FOR ADMIN panel
const updateStatus = async () => {

}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrder, updateStatus }