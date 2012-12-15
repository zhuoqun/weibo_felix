chrome.extension.onMessage.addListener( function(req) {
  if (req.weibo_felix == 'off') {
    $('#chrome_weibo_felix').remove();
  } else {
    if ($('#chrome_weibo_felix').length <= 0) {
      var link = document.createElement("link");
      link.href = chrome.extension.getURL("weibo_felix.css");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.id = "chrome_weibo_felix";
      $('head').append(link);
    }
  }
});
