$(document).ready(function(){
TowersOfHanoi.CanBeMoved();
});
var TowersOfHanoi = {};
var CanBeMoved, $diskToMove;

TowersOfHanoi.CanBeMoved = function(){
  $(".disk").on("mouseenter", function(){
    var placement = $(".pegWrapper").find($(this)).index(".disk");
    var diskNum = parseInt($(this).attr("data-diskNum"));//not necessarily using this line...
    if(placement === 0){
      $(this).addClass("movable");
      TowersOfHanoi.firstMove();
    }
  });
};

TowersOfHanoi.firstMove = function(){
  $(".movable").on("click", function(event){
    event.stopPropagation();
    $diskToMove = $(this);
    $diskToMove.toggleClass("chosen");
  });
  TowersOfHanoi.AllowedToMove();
};

TowersOfHanoi.AllowedToMove = function(){
  $(".peg").on("click", function(event){
    var currentDiskAttributes = [];
    var currentDisks = $(this).children(".disk");
    var toCompare = $(".movable").attr("data-diskNum");
    currentDisks.each(function(index, element){
    currentDiskAttributes.push(parseInt($(element).attr("data-diskNum")));
    });
    console.log(currentDiskAttributes);
    console.log("toCompare: ",toCompare);
    var notAllowed = currentDiskAttributes.some(function(attr){//notAllowed === true if some attr in array are less than compare attr
      return attr < toCompare;
    });
    if(!notAllowed) {
      console.log("allowed");
      TowersOfHanoi.Move();
    }
  });
};

TowersOfHanoi.Move = function(){
  $(".movable").on("click", function(event){
    event.stopPropagation();
    $diskToMove = $(this);
    $diskToMove.toggleClass("chosen");
  });
  $(".peg").on("click", function(){
    $(this).prepend($diskToMove);
    $diskToMove.toggleClass("chosen");
  });

};
