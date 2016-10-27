(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);



  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.pushToBought = function(itemIndex) {
      try {
        ShoppingListCheckOffService.pushToBought(itemIndex);
      } catch(error) {
        toBuy.errorMessage = error.message;
      }


    }
  }


  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();

  }

  //service
  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [
      {name: "Milk", quantity: "1"},
      {name: "Cookies", quantity: "2"},
      {name: "Cereal", quantity: "3"},
      {name: "Bread", quantity: "4"},
      {name: "Apple", quantity: "5"}
    ];
    var boughtItems = [];


    service.pushToBought = function(itemIndex) {
      var removedItem = toBuyItems[itemIndex];
      toBuyItems.splice(itemIndex, 1);
      boughtItems.push(removedItem);

      if(toBuyItems.length == 0) {
        throw new Error("Everything is bought!");
      }
    }


    service.getToBuyItems = function() {
      return toBuyItems;
    }
    service.getBoughtItems = function() {
      return boughtItems;
    }


  }



})();
