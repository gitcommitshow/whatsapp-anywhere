/**
 Code to be executed for context menu functionality
 **/

importScripts("assets/utility.js")

//Make sure assets/utility.js is loaded so we have access to _utility.getWhatsappMessageUrl 
function getword(info, tab) {
    _utility.getWhatsappMessageUrl(info.selectionText, function (whatsappMessageUrl) {
        chrome.tabs.create({
            url: whatsappMessageUrl
        });
    })
}

chrome.contextMenus.create({
    title: "Whatsapp: %s",
    contexts: ["selection"],
    id: "whatsapp-anywhere-context",
});

chrome.contextMenus.onClicked.addListener(getword)