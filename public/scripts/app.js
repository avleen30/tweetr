/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $(document).ready(function){
  function createTweetElement(dataObj) {
  var $tweet = $("<article>").addClass("user-article");
 // create header and its children
  var header = $("<header>").addClass("user-tweet-header");

    header.append($("<img>").addClass("user-thumbnail").attr("src", dataObj.user.avatars.small));
    header.append($("<h2>").addClass("user-name").text(dataObj.user.name));
    header.append($("<p>").addClass("user-handle").text(dataObj.user.handle));

 // create main and its children
  var main = $("<main>").addClass("user-feed");
    main.append($("<p>")).addClass("tweet-body");

 // create footer and its children
  var footer = $("<footer>").addClass("user-tweet-footer");

  var date = moment(dataObj.created_at);
    footer.append($("<span>").addClass("tweet-timestamp").text(date.fromNow()));
    footer.append($("<i>").addClass("fa fa-heart"));
    footer.append($("<i>").addClass("fa fa-retweet"));
    footer.append($("<i>").addClass("fa fa-flag"));
 // append header, main , footer to tweet
    $tweet.append(header).append(main).append(footer);
    return $tweet;
  }
});