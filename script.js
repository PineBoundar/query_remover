var removeQueries = function() {
  chrome.tabs.query({currentWindow:true}, function(tabs) {
    for (var i=0; i<tabs.length; i++) {
      var tab = tabs[i];
      if(!tab.url.match(/^http/))   continue;
      if(tab.url.match(/search\?/)) continue;

      tab.url = tab.url.replace(/\?.+$/,'');
      chrome.tabs.update(tab.id, {url:tab.url});
    }
  });
};
(function() {
  chrome.browserAction.onClicked.addListener(removeQueries);
})();