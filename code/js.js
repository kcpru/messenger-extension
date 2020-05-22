$(document).ready(function () {
  $("body").append("<div class='messenger-chat'></div>");
  const element = $(".messenger-chat");
  element.append(
    '<iframe src="https://www.messenger.com/" title="Messenger" scrolling="no"></iframe>'
  );
});
