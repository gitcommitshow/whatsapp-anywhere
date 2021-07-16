/**
Code to be executed to convert simple tel: links to whatsapp links
**/

//Make sure assets/utility.js is loaded so we have access to _utility.getWhatsappMessageUrl
var logoImg = chrome.runtime.getURL('assets/whatsapp_logo.png');
var all = document.getElementsByTagName('a');
for (elem of all) {
  let link = elem.href;
  if (link && link.indexOf('tel:') !== -1) {
    _utility.getWhatsappMessageUrl(link, function (whatsappMessageUrl) {
      //Add a whatsapp icon with link to whatsapp message
      elem.textContent =
        '<a href="' +
        whatsappMessageUrl +
        '" target="_blank" style="margin: 0 auto;">' +
        '<img src="' +
        logoImg +
        '" style="padding-right:12px;width:auto;height:16px;" /></a>' +
        elem.innerHTML;
      //let newWhatsappBtn = document.createElement('span')
      //newWhatsappBtn.innerHTML = '<a href="'+whatsappLink+'" target="_blank">'+'<img src="'+logoImg+'" width="16px" height="16px" /></a>'
      //elem.insertAdjacentHTML('beforebegin', newWhatsappBtn)
    });
  }
}
