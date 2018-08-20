          var state = 1;
          var $body = $('body');
          var streamTweets = function(){
            //Sort the streams by date made
            streams.home.sort(function (a, b){
            var dateA = new Date(a.created_at), dateB = new Date(b.created_at);
            return dateA - dateB;
          });

          for(var i = 0; i < streams.home.length; i++){
          var $tweetBody=$('<div class="tweetBody"></div>');
          var tweet = streams.home[i];
          var $user = $('<div class="' + tweet.user + '"></div>');

          var $tweet = $('<div class="tweet"></div>');
          var $date =$('<div class="date"></div>');

          $user.text('@' + tweet.user);
          $tweet.text(tweet.message);
          $date.text(tweet.created_at.toLocaleTimeString());

          //$tweetBody.append($user);
          $user.appendTo($tweetBody);
          $date.appendTo($tweetBody);
          $tweet.appendTo($tweetBody);

          $tweetBody.appendTo($body);
        }
   
      };      







      $(document).ready(function(){
       setInterval(streamTweets(), 3000);
       $(".shawndrost").click(function(){
          $(".sharksforcheap").parent().slideToggle();
          $(".douglascalhoun").parent().slideToggle();
          $(".mracus").parent().slideToggle();
     })
        $(".sharksforcheap").click(function(){

          $(".shawndrost").parent().slideToggle();
          $(".douglascalhoun").parent().slideToggle();
          $(".mracus").parent().slideToggle();

       })
        $(".douglascalhoun").click(function(){

          $(".sharksforcheap").parent().slideToggle();
          $(".shawndrost").parent().slideToggle();
          $(".mracus").parent().slideToggle();

       })
        $(".mracus").click(function(){

          $(".sharksforcheap").parent().slideToggle();
          $(".douglascalhoun").parent().slideToggle();
          $(".shawndrost").parent().slideToggle();

       })

       // $body.html('');

        
      });
