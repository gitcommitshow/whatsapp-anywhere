"use strict";
const saveOptions = function () {
    var defaultCountryCode = document.getElementById('default-country-code').value;
    var defaultMessage = document.getElementById('default-message').value;
    chrome.storage.sync.set({
        defaultCountryCode: defaultCountryCode,
        defaultMessage: defaultMessage
    }, function () {
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.innerHTML = '&nbsp;';
        }, 1000);
    });
};
const restoreOptions = function () {
    chrome.storage.sync.get({'defaultCountryCode': 91, 'defaultMessage': ''}, function (configs) {
        document.getElementById('default-country-code').value = configs.defaultCountryCode;
        document.getElementById('default-message').value = configs.defaultMessage;
    });
};
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);

