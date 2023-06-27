const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Product = new Schema({
        name: { type: String, require: true },
        price: { type: Number },
        category: [{
                type: mongoose.Schema.Types.ObjectId, ref: 'Category'
        }],
        genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' },
        image: {
                type: String
        },
        selled: { type: Number },
        description: { type: String },
        slug: { type: String, slug: "name" }
}, {
        timestamps: true
});

module.exports = mongoose.model('Product', Product)