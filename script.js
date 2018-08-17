      $(document).ready(function(){
        var $body = $('body');

       // $body.html('');

          for(var i = 0; i < streams.home.length; i++){
          var $tweetBody=$('<div class="tweetBody"></div>');
          var tweet = streams.home[i];
          var $user = $('<div class="user"></div>');
          var $tweet = $('<div class="tweet"></div>');

          $user.text('@' + tweet.user);
          $tweet.text(tweet.message);

          //$tweetBody.append($user);
          $user.appendTo($tweetBody);
          $tweet.appendTo($tweetBody);
          $tweetBody.appendTo($body);
        }
        setInterval(tweetStreet, 3000);
      });
