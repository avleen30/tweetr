/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 $( document ).ready(function(){
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

//fetching tweets from the http://localhost:8080/tweets page.
function loadTweets() {
  $.getJSON('/tweets')
  .done((tweets) => {
    renderTweets(tweets);
  })
}

//form validation
function isValid() {
  var charLength = $(".new-tweet textarea").val().length;
  if (charLength <= 0) {
    alert("Please enter a tweet! ");
    return false;
  }
  if (charLength > 140) {
    alert("tweet exceeds 140 characters!");
    return false;
  }
  return true;
}

function postTweet(event) {
  event.preventDefault();
  if (isValid()) {
    const $form = $(this);
    $.ajax({
      type: 'POST',
      url: '/tweets',
      data: $form.serialize()
    })
    .done(() => {
      loadTweets();
      $('.new-tweet textarea').val('');
    });
  }
}

function toggleComposeBox() {
  $('.new-tweet').slideToggle("slow", () => {
    $('.new-tweet textarea').focus();
  });
}


  // Event handlers
  $('#submit-tweet-form').on('submit', postTweet);
  $('.compose-button').on('click', toggleComposeBox);
// Do first load
loadTweets();
});