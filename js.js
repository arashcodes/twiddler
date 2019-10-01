$(document).ready(function(){

  let showTweets = function() {
    $tweetContainer.html('');
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');

      $tweet.addClass(tweet.user);
      $tweet.addClass('eachTweet');

      $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at);

      $tweet.appendTo($tweetContainer);
      index -= 1;
    }
  };


  var $body = $('body');
  var $tweetContainer = $('.tweet-container');

  var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          $tweet.addClass('eachTweet');
          $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at);
          $tweet.appendTo($tweetContainer);
          index -= 1;
        }

  $('.button-home').click(function() {
    showTweets();
  });

  $('.tweet-container').on('click', '.shawndrost' ,function(event) {
    event.preventDefault();

    $tweetContainer.html('');
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');
      if(tweet.user === 'shawndrost') {
        $tweet.addClass(tweet.user);
        $tweet.addClass('eachTweet');
        $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at);
        $tweet.appendTo($tweetContainer);
      }
      index -= 1;
    }
   });

  $('.tweet-container').on('click', '.sharksforcheap',function(event) {
    event.preventDefault();

    $tweetContainer.html('');
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');
      if(tweet.user === 'sharksforcheap') {
        $tweet.addClass(tweet.user);
        $tweet.addClass('eachTweet');
        $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at);
        $tweet.appendTo($tweetContainer);
      }
      index -= 1;
    }
   });

  $('.tweet-container').on('click', '.mracus',function(event) {
    event.preventDefault();

    $tweetContainer.html('');
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');
      if(tweet.user === 'mracus') {
        $tweet.addClass(tweet.user);
        $tweet.addClass('eachTweet');
        $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at);
        $tweet.appendTo($tweetContainer);
      }
      index -= 1;
    }
   });

  $('.tweet-container').on('click', '.douglascalhoun',function(event) {
    event.preventDefault();

    $tweetContainer.html('');
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');
      if(tweet.user === 'douglascalhoun') {
        $tweet.addClass(tweet.user);
        $tweet.addClass('eachTweet');
        $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at);
        $tweet.appendTo($tweetContainer);
      }
      index -= 1;
    }
   });
});