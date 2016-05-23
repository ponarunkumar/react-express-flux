console.info('File: GroceryItemActionCreator.jsx');
var dispatcher = require('./../dispatcher.js');

module.exports = {
    add: function(item){
        console.info('Inside add action before dispatching...');
        dispatcher.dispatch({
            payload:item,
            type:"grocery-item:add"
        })
    },
        delete: function(item){
        console.info('Inside delete action before dispatching...');
        dispatcher.dispatch({
            payload:item,
            type:"grocery-item:delete"
        })
    },
        buy: function(item){
        console.info('Inside buy action before dispatching...');
        dispatcher.dispatch({
            payload:item,
            type:"grocery-item:buy"
        })
    },   
            unbuy: function(item){
       console.info('Inside unbuy action before dispatching...');
        dispatcher.dispatch({
            payload:item,
            type:"grocery-item:unbuy"
        })
    }  
}