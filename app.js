(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ShoppingList1', ShoppingList1)
.controller('ShoppingList2',ShoppingList2)
.service('ShoppingList', ShoppingListService);

ShoppingList1.$inject=['ShoppingList'];
function ShoppingList1(ShoppingList)
{
    var list1=this;
    list1.items=ShoppingList.getItemBuy();
    list1.bought=function(index)
    {
        ShoppingList.moveItem(index);
    }
}
ShoppingList2.$inject=['ShoppingList'];
function ShoppingList2(ShoppingList)
{
    var list2=this;
    list2.items = ShoppingList.getItemBought();
    //console.log(list2.items);
    
}
function ShoppingListService()
{
    var service = this;
    var items=[
        {   name : "chips",
            quantity : 2
        },
        {   name : "coco cola",
            quantity : 2
        },
        {   name : "noodels",
            quantity : 2
        },
        {   name : "fanta",
            quantity : 2
        },
        {   name : "Choclate cookies",
            quantity : 2
        }

    ];
    var itemsBought=[];
    service.moveItem = function(index){
        var item = items[index];
        items.splice(index,1);
        itemsBought.push(item);
    };
    service.getItemBuy= function(){
        return items;
    };
    service.getItemBought=function(){
        return itemsBought;
    }
}

})();
