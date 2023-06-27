const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
        username: { type: String, require: true, unique: true },
        password: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        genre: { type: String },
        phone: { type: Number },
        isAdmin: { type: Boolean }
}, {
        timestamps: true
});

module.exports = mongoose.model('User', User)