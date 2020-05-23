$(document).ready(function () {
  $("body").append("<div class='messenger-chat'></div>");
  const element = $(".messenger-chat");
  element.append('<iframe class="messenger-iframe" scrolling="no"></iframe>');
  $(".messenger-iframe").attr("src", "https://www.messenger.com/");
});
