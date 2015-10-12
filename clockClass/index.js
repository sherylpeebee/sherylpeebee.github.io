$(function(){
  function Clock(){
    this.run = function(){

      var date = new Date();
      var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
      var currentHour, currentMinute, currentSecond;

      (function getInitialHandPlacement(){
        currentHour = hours.toString().length < 2 ? "0" + hours : hours;
        currentMinute = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();
        currentSecond = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds();
      })();

      var hourIncr =  currentHour < 3 < currentHour ? (currentHour - 3) * 30 : 0;
      $("div.hour_hand").css({transform: 'rotate(' + hourIncr + 'deg)' });

      var minIncr = currentMinute < 15 < currentMinute ? (currentMinute - 15) * 6 : 0;
      $("div.minute_hand").css({ transform: 'rotate(' + minIncr + 'deg)' });

      setInterval(function digitalTime() {
        date = new Date();
        hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        var hh = hours.toString().length < 2 ? "0" + hours : hours;
        var mm = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();
        var ss = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds();
        $(".digital_time").text(hh + ":" + mm + ":" + ss);
      }, 1000);

        var secsCount = 0;
        setInterval(function(){
          if(secsCount < 360){
            secsCount += 6;
          } else {
            secsCount = 6;
          }
          $("div.second_hand").css({transform: 'rotate(' + secsCount + 'deg)' });
        }, 1000);

        var minCount = 0;
        setInterval(function(){
          if(minCount < 360){
            minCount += 6;
          } else {
            minCount = 6;
          }
          $("div.minute_hand").css({transform: 'rotate(' + minCount + 'deg)' });
        }, 60000);

    };
  }

  var clock = new Clock();
  clock.run();

});

//start all hands at three.
//get hour time from clock func and increment 30deg for every past three
//every fifteen minutes, hour increment six degrees (one notch)

// issue: right now, after one minute, minute resets to first fixed placed. (on three)
