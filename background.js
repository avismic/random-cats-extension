chrome.browserAction.onClicked.addListener(() => {
  const newTabUrl = "https://avismic.github.io/random-cats/"; // Replace with your desired URL
  chrome.tabs.create({ url: newTabUrl });
});
