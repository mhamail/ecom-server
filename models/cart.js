const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

const cartSchema = new mongoose.Schema(
    {
        products: [
            {
                product: {
                    type: ObjectId,
                    ref: "Product"
                },
                count: Number,
                price: Number,
                title: String,
                postedBy: {
                    type: ObjectId,
                    ref: 'users'
                },
            }
        ],
        cartTotal: Number,
        totalAfterDiscount: Number,
        orderedBy: {
            type: ObjectId,
            ref: "users"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Cart', cartSchema)