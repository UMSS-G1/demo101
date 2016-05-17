angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  $scope.name = "";
  $scope.twitter = "@nicobytes";

  $scope.numberA = 0;
  $scope.numberB = 0;
  $scope.showAlert = showAlert;

  $scope.girls = [
    {
      name: "Kattya",
      lastname: "Cuevas",
      age: 21
    },
    {
      name: "Luz",
      lastname: "Perez",
      age: 26
    },
    {
      name: "Camila",
      lastname: "Becerra",
      age: 23
    },
    {
      name: "Monica",
      lastname: "Irene",
      age: 32
    },
  ];

  function showAlert(){
    alert("Hi!!!");
  }


  console.log( $scope.name );

})


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('ClassOneCtrl', function($scope, $ionicPopup){
  

  $scope.nameGirl = "";
  $scope.lastNameGirl = "";

  $scope.today = new Date().getTime();

  $scope.showAlert = showAlert;

  function showAlert(){
    //alert("Hello!!!!");
    $ionicPopup.alert({
      title: "Hola!!!",
      template: "Como vamos???",
      okText: "Aceptar",
      okType: "button-dark"
    });
  }

  $scope.girls = [
    {
      name: "Kattya",
      lastname: "Cuevas",
      age: 21,
      photo: "http://cdn04.cdn.justjaredjr.com/wp-content/uploads/headlines/2016/02/vanessa-marano-gilmore-girls-interview.jpg"
    },
    {
      name: "Luz",
      lastname: "Perez",
      age: 26,
      photo: "http://cdn04.cdn.justjaredjr.com/wp-content/uploads/headlines/2016/02/vanessa-marano-gilmore-girls-interview.jpg"
    },
    {
      name: "Maria",
      lastname: "Alejandra",
      age: 26,
      photo: "http://cdn04.cdn.justjaredjr.com/wp-content/uploads/headlines/2016/02/vanessa-marano-gilmore-girls-interview.jpg"
    },
    {
      name: "Danna",
      lastname: "Paola",
      age: 23,
      photo: "http://cdn04.cdn.justjaredjr.com/wp-content/uploads/headlines/2016/02/vanessa-marano-gilmore-girls-interview.jpg"
    },
    {
      name: "Lea",
      lastname: "Verou",
      age: 32,
      photo: "http://cdn04.cdn.justjaredjr.com/wp-content/uploads/headlines/2016/02/vanessa-marano-gilmore-girls-interview.jpg"
    },
    {
      name: "Monica",
      lastname: "Irene",
      age: 21,
      photo: "http://cdn04.cdn.justjaredjr.com/wp-content/uploads/headlines/2016/02/vanessa-marano-gilmore-girls-interview.jpg"
    }
  ];

});
