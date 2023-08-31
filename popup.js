(() => {
  const sendButton = document.getElementById("button");

  if (sendButton === null) {
    return;
  }

  sendButton.onclick = function (el) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          files: ["script.js"],
        },
        () => {}
      );
    });
  };
})();
