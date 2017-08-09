/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
var tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}


var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function createTweetElement(dataObj) {
  var $tweet = $("<article>").addClass("user-article");
 // create header and its children
  var header = $("<header>").addClass("user-tweet-header");
    header.append($("<img>").addClass("user-thumbnail").attr("src", dataObj.user.avatars.small));
    header.append($("<h2>").addClass("user-name").text(dataObj.user.name));
    header.append($("<p>").addClass("user-handle").text(dataObj.user.handle));

 // create main and its children
  var main = $("<main>").addClass("user-feed");
    main.append($("<p>").addClass("tweet-body").text(dataObj.content.text));

 // create footer and its children
  var footer = $("<footer>").addClass("user-tweet-footer");

  var date = moment(dataObj.created_at);
   footer.append($("<span>").addClass("tweet-timestamp").text(date.fromNow()));
   footer.append($("<i>").addClass("fa fa-heart"));
   footer.append($("<i>").addClass("fa fa-retweet"));
   footer.append($("<i>").addClass("fa fa-flag"));
 // append header, main , footer to tweet
  $tweet.append($(header)).append($(main)).append($(footer));

  return $tweet;
}
  var selector = '#tweets-container'

//to take in an array of tweet objects and then append each one to the #tweets-container
  function renderTweets(tweets) {
    $(selector).empty();
    tweets.forEach((userObj) => {
      var $tweet = createTweetElement(userObj);
      $(selector).append($tweet);
    })
  }


$( document ).ready(function(){

//  // Test / driver code (temporary). Eventually will get this from the server.

//   var $tweet = createTweetElement(tweetData);

// // Test / driver code (temporary)
//   console.log($tweet); // to see what it looks like
//   $("#tweets-container").append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.



  renderTweets(data);

});