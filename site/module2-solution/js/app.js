(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = [
  {
    name: "bags of chips",
    quantity: 3
  },
  {
    name: "bottles of soda",
    quantity: 2
  },
  {
    name: "dozen of eggs",
    quantity: 1
  },
  {
    name: "bags of ice",
    quantity: 2
  },
  {
    name: "boxes of pizza",
    quantity: 7
  },
   {
    name: "cases of beer",
    quantity: 4
  }
  ];

 showList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex, showList.items);   
 };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.items;
  };


function ShoppingListCheckOffService() {
  var buy = this;
  buy.items = [];

    buy.buyItem = function(itemIndex, itemArray){
     var item = {
      name: '',
      quantity: ''
     }

     item.name = itemArray[itemIndex].name;
     item.quantity = itemArray[itemIndex].quantity;
     itemArray.splice(itemIndex, 1); 
     buy.items.push(item);    
    };

}

})();