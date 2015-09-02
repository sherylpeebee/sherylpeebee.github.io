// $(document).ready(function(){
//   $("#submit").on("click", function(){
//
//     $("input").on("keyup", function(e){
//       if(e.which == 13){
//         something.editable = false;
//       }
//     });
//   });
// });


angular.module("Contacts", ["angular-md5", "xeditable"])
.run(function(editableOptions) {
  editableOptions.theme = 'default'; // bootstrap3 theme. Can be also 'bs2', 'default'
})
  .controller("ContactsCtrl", function($scope, md5){
    console.log("up to date");

    var contacts = JSON.parse(localStorage.contacts);
    console.log(contacts);
    if(!contacts[0]){
      $scope.contactsArr = [
        {name: "Tania Leonian", email: "tania.dev77@gmail.com", phone: "510-798-3716", editable: false},
        {name: "Lionel Briones", email: "lionelbriones@gmail.com", phone: "", editable: false},
        {name: "Samer Buna", email: "samer.buna@gmail.com", phone: "", editable: false}
      ];
    } else {
      $scope.contactsArr = contacts;
    }
    $scope.addContact = function(obj){
      $scope.contactsArr.push(obj);
      console.log($scope.contactsArr);
      localStorage.setItem("contacts", JSON.stringify($scope.contactsArr));

      $scope.contact = { name: "", gravatar: "", email: "",  phone: ""};
    };
    $scope.editable = function(something){
      if(!something.editable){
         something.editable = true;
      }
      $(document).ready(function(){
          $("input").on("keyup", function(e){
            if(e.which == 13){
              something.editable = false;
            }
          });
        });
      console.log(something.editable);
    };
    $scope.deleteContact = function(index){
      $scope.contactsArr.splice(index, 1);
      localStorage.setItem("contacts", JSON.stringify($scope.contactsArr));
    };
});
