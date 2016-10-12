(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
  ;

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController (ShoppingListCheckOffService) {
    var buy = this;
    buy.markAsBought = ShoppingListCheckOffService.markAsBought;
    buy.getToBuyList = ShoppingListCheckOffService.getToBuyList;
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController (ShoppingListCheckOffService)  {
    var bought = this;
    bought.getBoughtList = ShoppingListCheckOffService.getBoughtList;
  }

  function ShoppingListCheckOffService () {
    var buyArray = [{'amount': 1, 'name': 'Milk'},
                    {'amount': 10, 'name': 'Boneless Chicken Legs'},
                    {'amount': 12, 'name': 'Peach'},
                    {'amount': 1, 'name': 'Bread'},
                    {'amount': 1, 'name': 'Cheese Spread'}];
    var boughtArray = [];

    this.markAsBought = function (index) {
      var item = buyArray.splice(index, 1)[0];
      boughtArray.push(item);
    }

    this.getToBuyList = function () {
      return buyArray;
    }

    this.getBoughtList = function () {
      return boughtArray;
    }
  }
})();
