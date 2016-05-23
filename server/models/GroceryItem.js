var mongoose = require('mongoose');

var GroceryItemSchema = {
    name:String,
    purchased:Boolean,
    id:String
};

var GroceryItem = mongoose.model('GroceryItem', GroceryItemSchema,'groceryITems');

module.exports = GroceryItem;