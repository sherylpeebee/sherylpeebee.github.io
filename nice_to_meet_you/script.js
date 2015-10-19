$(function () {
  $('.curtains').curtain({
      scrollSpeed: 400,
      controls: '.menu',
      nextSlide: function() { console.log('next slide'); },
      prevSlide: function() { console.log('previous slide'); }
  });

  $pages = $('.curtain-page');

  list = $('.selfies');

  function faces(){
  var i = 0;
    setInterval(function() {
      i++ ;
        $(list[i]).show();
        if (i >= list.length){
          i = 0;
          console.log("done");
          $('.selfies').hide();
        }
    }, 800);
  }
  faces();

  $('.intro').typetype('Hi! I\'m Sheryl!');

  setTimeout(function(){
    $('.like').fadeIn(2000);
  }, 4000);

  setTimeout(function(){
    $('.make')
    .typetype('make things pretty!')
    .delay(1000)
    .backspace(20)
    .typetype('make things smart.')
    .delay(1000)
    .backspace(18)
    .typetype('make things work.')
    .delay(1000)
    .backspace(30)
    .typetype('make.allTheThings( )');
  }, 7000);

  $('li.nav_to_page.tab-li ').on('click', function(){
    if($('.side-nav').hasClass('inactive')){
      $('.side-nav').removeClass('inactive').addClass('active');
    }
    else if($('.side-nav').hasClass('active')){
      $('.side-nav').removeClass('active').addClass('inactive');
    }
  });

  var projects =
  [
    {
      title: 'the history of us',
      views: [
        {img: '/assets/projects/history_splash.png', summary: 'A web app dedicated to close-knit social sharing. For the times when somebody, but not <em>everybody</em> needs to know...'},
        {img: '/assets/projects/history_blank.png', summary: 'A getting started prompt'},
        {img: '/assets/projects/history_storyForm.png', summary: 'Remember that time when you did that thing?'},
        {img: "/assets/projects/history_example.png", summary: 'Everyone you invite to the timeline can see what you have to say and add some history of their own, too.'},
        {img: "/assets/projects/history_status.png", summary: 'Just a friendly reminder. You have to create an account to really use this service, so make one!'}
      ]
    },
    {
      title: 'driftr',
      views: [
        {img: "/assets/projects/driftr_splash.png", summary: 'A proof of concept of a realized concept! 👯 Book stays to rest your weary bones or find some friends to fill your homes! '},
        {img: "/assets/projects/driftr_profile.png", summary: 'Build a profile and tell a little about yourself, your home and what you\'re looking for.' },
        {img: "/assets/projects/driftr_listings.png" , summary: 'Need a place to stay? See all available listings.'},
        {img: "/assets/projects/driftr_travelForm.png", summary: 'Book a stay somewhere that catches your eye.'},
        {img: "/assets/projects/driftr_parallax.png", summary: 'You, too, can have an ambient sense of peace and satisfaction while traveling. A bit of parallax prettiness built with Materialize CSS.'}
      ]
    },
    {
      title: 'your forecaster',
      views: [
        {img: "/assets/projects/weather_mainBlur.png", summary: 'A simple weather forecasting app built with the Wunderground API'},
        {img: "/assets/projects/weather_login.png", summary: 'Utilizes Passport JS to authenticate users. Take comfort in knowing your priceless weather gems are unassailable... even against the most wily of weather bandits.'},
        {img: "/assets/projects/weather_changeLocale.png" , summary: 'See the weather in more detail. Up-to-the-minute updates available in a hidden panel that opens on a click. Why not see how the weather is elsewhere, too?'},
        {img: "/assets/projects/weather_newLocale.png", summary: 'Change it up.'},
        {img: "/assets/projects/weather_forecast.png", summary: 'Never be caught without sunscreen or an umbrella again!'}
      ]
    }
  ];

  $('img.projects:not(.project_hero)').on('click', function(e){
    e.stopPropagation();

    var $currentProjectTitle = $(this).parent().parent()
    .children('#project-title').text().toLowerCase().trim();
    console.log($currentProjectTitle);
    var currentProject;
    projects.forEach(function(project){
      if(project.title === $currentProjectTitle){
        currentProject = project;
      }
    });
    console.log(currentProject);

    var $currentHero = $(this).parent().parent().children('.project_hero');
    var newSrc = $(this).attr('src');
    var oldSrc = $($currentHero).attr('src');
    $($currentHero).attr('src', newSrc);
    $(this).attr('src', oldSrc);
    var $currentView = $(this).parent().parent().children('img.project_hero').attr('src');
    console.log($currentView);
    var summary;
    currentProject.views.forEach(function(view){
      if(view.img === $currentView){
        summary = view.summary;
      }
    });
    $(this).parent().parent().children('.summary').html(summary);
  });

  var project_pages = $('.project_page');
  var totalPages = project_pages.length;
  var counter = totalPages-1;
  var project_page_width = $('.project_page').width();

  $('.project_page').click(function(e){
    console.log(counter);
    e.stopPropagation();
    if(counter === 0){
      $('.project_page').css('transform', '');
      counter = totalPages;
    }
    else{
      $(project_pages[counter]).css('transform', 'translate(-'+ project_page_width + 'px)');
    }
    counter --;
  });

  $('.btn').click(function(e){
    e.stopPropagation();
    alert('works');
  });


});
