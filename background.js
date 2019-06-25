chrome.tabs.onCreated.addListener(function(tab) {
	console.log('Created tab openerTabId: ', tab.openerTabId);
	console.log(tab);
});