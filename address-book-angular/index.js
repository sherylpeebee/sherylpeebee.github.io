
angular.module("Contacts", ["angular-md5", "xeditable"])
.run(function(editableOptions) {
  editableOptions.theme = 'default'; // bootstrap3 theme. Can be also 'bs2', 'default'
})
  .controller("ContactsCtrl", function($scope, md5){
    console.log("up to date");

    var allDataStored = Object.keys(localStorage);
    console.log(allDataStored.indexOf("contacts"));

    if(allDataStored.indexOf("contacts") < 0){
      $scope.contactsArr = JSON.parse(localStorage.contacts);
    }else if(allDataStored.indexOf("contacts") >= 0) {
      $scope.contactsArr = [
        {name: "Tania Leonian", email: "tania.dev77@gmail.com", phone: "510-798-3716", editable: false},
        {name: "Lionel Briones", email: "lionelbriones@gmail.com", phone: "", editable: false},
        {name: "Samer Buna", email: "samer.buna@gmail.com", phone: "", editable: false}
      ];
      // debugger;
    }


    $scope.addContact = function(obj){
      $scope.contactsArr.push(obj);
      console.log($scope.contactsArr);
      localStorage.setItem("contacts", JSON.stringify($scope.contactsArr));

      $scope.contact = { name: "", gravatar: "", email: "",  phone: ""};
    };
    $scope.editable = function(contact){
      if(!contact.editable){
         contact.editable = true;
      }
      $(document).ready(function(){
          $("input").on("keyup", function(e){
            if(e.which == 13){
              contact.editable = false;
            }
          });
        });
      console.log(contact.editable);
    };
    $scope.deleteContact = function(index){
      $scope.contactsArr.splice(index, 1);
      localStorage.setItem("contacts", JSON.stringify($scope.contactsArr));
    };
});
