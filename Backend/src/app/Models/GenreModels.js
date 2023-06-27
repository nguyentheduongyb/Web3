const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Genre = new Schema({
        name: { type: String, require: true },
        description: { type: String }
}, {
        timestamps: true
});

module.exports = mongoose.model('Genre', Genre)