const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "name field field cant be empty"]
    },
    category: {
        type: String,
        trim: true,
        required: [true, 'category field field cant be empty']
    },
    image: {
        type: String,
        trim: true,
        required: [true, 'image field field cant be empty']
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'description field field cant be empty']
    }
}, {timestamps: true})


module.exports= model('Product', productSchema)