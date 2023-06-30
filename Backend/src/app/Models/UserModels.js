const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
        username: { type: String, require: true, unique: true },
        password: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        genre: { type: String },
        phone: { type: Number },
        cart: {
                // To define that you want to store an array, you simply create an array
                // Array of embedded documents
                items: [
                        {
                                product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
                                quantity: { type: Number, required: true },
                        },
                ],
        },
        isAdmin: { type: Boolean }
}, {
        timestamps: true
});

module.exports = mongoose.model('User', User)