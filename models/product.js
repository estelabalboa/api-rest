'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema ({
	name : String,
	price : {type: Number, default: 0 },
	pictures : String,
	category : {type: String, enum: ['computers', 'phones', 'accesories']},
	description : String
})

module.exports = mongoose.model('Product' , ProductSchema)