module.exports = function (app){
console.info('File: <<<<<<<<<<ITEM DATA>>>>>>>>');

// var items = [
//     {name: "Ice Cream"},
//     {name: "Waffles"},
//     {name: "Candy",
//       purchased: true},
//     {name: "Snarks"}
//     ];
    var GroceryItem = require('./../models/GroceryItem.js')
    
    app.route('/api/items')
    .get(function(req,res){
        GroceryItem.find(function(error,doc){
            res.send(doc);
        })
        // res.send(items);
    })
     .post(function(req,res){
        var item = req.body;
        var groceryItem = new GroceryItem(item);
        groceryItem.save(function(err,data){
            res.status(300).send();
            
        })
        items.push(item); 
   })
   
   app.route('/api/items/:id')
   .delete(function(req,res){
       GroceryItem.findOne({
           _id:req.params.id
       }).remove();
   })
   .patch(function(req,res){
       GroceryItem.findOne({
           _id:req.body._id
       }, function(error,doc){
           for (var key in req.body){
               doc[key] = req.body[key];
           }
           doc.save();
           res.status(200).send();
       })
   })
}