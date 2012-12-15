function updateTab(tab) {
  if (tab.url.indexOf('weibo.com') !== -1) {
    if (localStorage['weibo_felix'] == 'on') {
      chrome.tabs.sendMessage(tab.id, {"weibo_felix": "on"});
    } else {
      chrome.tabs.sendMessage(tab.id, {"weibo_felix": "off"});
    }
  }
}

chrome.tabs.getAllInWindow(function(tabs) {
  tabs.forEach(updateTab);
});

chrome.tabs.onUpdated.addListener(function(id, data, tab) {
  updateTab(tab);
});

chrome.extension.onMessage.addListener(function(req) {
  chrome.tabs.getAllInWindow(function(tabs) {
      tabs.forEach(updateTab);
    });
});
