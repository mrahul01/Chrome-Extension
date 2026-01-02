

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed and service worker registered.");
});


chrome.action.onClicked.addListener((tab) => {
    console.log("Action clicked on tab:", tab);
 
});
