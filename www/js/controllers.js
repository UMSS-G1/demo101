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


.controller('ChatsCtrl', function($scope, $ionicModal) {

  $scope.rockband = {};
  $scope.nameRockBand = "";

  $scope.rockbands = [
    {
      name: "nirvana",
      photo: "nirvana.png",
      type: "rock"
    },
    {
      name: "los prisioneros",
      photo: "prisioneros.jpg",
      type: "rock on roll"
    },
    {
      name: "kudai",
      photo: "kudai.jpg",
      type: "drama"
    },
    {
      name: "hombres g",
      photo: "hombresg.jpg",
      type: "rock"
    },
  ];

  $scope.showModal = showModal;
  $scope.closeModal = closeModal;
  $scope.saveRockBand = saveRockBand;

  $scope.modal = null;

  $ionicModal.fromTemplateUrl("templates/rockband-modal.html", {
    scope: $scope
  })
  .then(function(modal){
    $scope.modal = modal;
  });

  function showModal(){
    $scope.modal.show();
  }

  function closeModal(){
    $scope.modal.hide();
  }

  function saveRockBand(){
    $scope.rockband.photo = "nirvana.png";
    $scope.rockbands.push( $scope.rockband );
    $scope.rockband = {};
    $scope.modal.hide();
  }

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $ionicLoading) {
  

  $ionicLoading.show();
  setTimeout(function(){
    $ionicLoading.hide();
  }, 10000);

  $scope.data = {
    foods: [
      {
        name: "Pizza",
        check: false
      },
      {
        name: "HotDog",
        check: true
      },
      {
        name: "Hamburger",
        check: false
      },
      {
        name: "Papas",
        check: false
      },
    ]
  };

  $scope.saveData = saveData;

  function saveData(){
    console.log( "Nombre", $scope.data.name );
    console.log( "Nickname", $scope.data.nickname );
    console.log( "Comida", $scope.data.foods.filter(item => item.check).map(item => item.name) );
    console.log( "Genero", $scope.data.gender );
    console.log( "Vacunado", $scope.data.vacunado);
    console.log( "Rabia", $scope.data.rabia );
  }

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
