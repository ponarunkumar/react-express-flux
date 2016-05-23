var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/RestHelper.js');
console.info('File: <<<<<<<<<<STORE>>>>>>>>');

function GroceryItemStore(){
    var items = [];
//     var items = [
//     {name: "Ice Cream"},
//     {name: "Waffles"},
//     {name: "Candy",
//       purchased: true},
//     {name: "Snarks"}
// ];

helper.get("api/items")
.then(function(data){
    console.info('Store gets the data from the api/items...')
    items = data;
    console.info('retrieved first item of data:' + data[0].name);
    triggerListeners();
})

    var listeners = [];
    
    function getItems(){
        return items;
    }
    function addGroceryItem(item){
        console.info('Inside the addGroceryItem in STORE');
        items.push(item);
        triggerListeners();
        
        helper.post("api/items", item)
        .then(function(data){
    console.info('posting...')
    items = data;})
    }
    function deleteGroceryItem(item){
        var index;
        items.filter(function(_item, _index){
            if (_item.name == item.name) {
                index = _index;
            }
        });  
        items.splice(index,1);
        triggerListeners();
        
        helper.del('api/items/'+item._id);
    }
    
    function setGroceryItemBought(item, isBought){
        var _item = items.filter(function(a){return a.name == item.name})[0];
        item.purchased = isBought || false;
        triggerListeners();
        
        helper.patch('api/items/'+item._id,item)
    }
    
    function onChange(listener){
                    console.info('onChange(listener)', listener);
        listeners.push(listener);
    }
    
    function triggerListeners(){
        listeners.forEach(function(listener){
            console.info('triggerListeners()', listener);
            listener(items);
        })
    };
    
    dispatcher.register(function(event){
console.info('Inside the STORE dispatcher.register');
        var split = event.type.split(':');
        if(split[0] ==='grocery-item'){
            switch(split[1]){
                case "add":
                    addGroceryItem(event.payload);
                    break;
                case "delete":
                    deleteGroceryItem(event.payload);
                    break;
                case "buy":
                    setGroceryItemBought(event.payload, true);
                    break;
                case "unbuy":
                    setGroceryItemBought(event.payload, false);
                    break;                                        
            }
        }
    })
    return {
    getItems: getItems,
    onChange:onChange
}
}



module.exports = new GroceryItemStore();