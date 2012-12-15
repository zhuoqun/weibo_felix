// set the default value to true
if (localStorage['weibo_felix'] != 'off') {
  localStorage['weibo_felix'] = 'on';
  $('#setting').attr('checked', true);
} else {
  $('#setting').attr('checked', false);
}

$('#setting').click(function (e) {
  if ($(this).is(':checked')) {
    localStorage['weibo_felix'] = 'on';
    chrome.extension.sendMessage({"weibo_felix": "on"});
  } else {
    localStorage['weibo_felix'] = 'off';
    chrome.extension.sendMessage({"weibo_felix": "off"});
  }
});
