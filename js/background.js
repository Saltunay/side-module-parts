chrome.contextMenus.create({
	"title": "Lorem ipsum dolor",
	"contexts": ["selection"],
	"onclick": openTab()
});

function openTab() {
	return function (info, tab) {
		let text = info.selectionText
		let redditLink = "http://google.com"
		chrome.tabs.create({
			index: tab.index + 1,
			url: redditLink,
			selected: true
		})
	}
}