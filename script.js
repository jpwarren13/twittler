      $(document).ready(function(){
        var $body = $('body');
       // $body.html('');

          for(var i = 0; i < streams.home.length; i++){
          var tweet = streams.home[i];
          var $tweet = $('<div class="tweet"></div>');
          $tweet.text('@' + tweet.user + ': ' + tweet.message);
          $tweet.appendTo($body);
        }
        setInterval(tweetStreet, 3000);
      });
