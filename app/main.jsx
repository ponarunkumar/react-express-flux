var React = require('react');
var ReactDOM = require('react-dom');
console.log('<<<<<<<<<<STARTED MAIN.JSX>>>>>>>>>>>>>');

var GroceryItemList = require('./components/GroceryItemList.jsx');

var groceryItemStore = require('./stores/GroceryItemStore.jsx');
var initial = groceryItemStore.getItems();

function render(){
    console.log('renders the component..');
    ReactDOM.render(<GroceryItemList items={initial}/>, app)
}

groceryItemStore.onChange(function(items){
    initial = items;
    render();
})
render();

