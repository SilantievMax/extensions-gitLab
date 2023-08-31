const sendButton = document.getElementById("button");

// document.addEventListener("DOMContentLoaded", () => {

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.scripting.executeScript(
    {
      target: { tabId: tabs[0].id },
      files: ["script.js"],
    },
    () => {}
  );
});
// });
