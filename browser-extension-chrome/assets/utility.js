/**
 Common code to be used in the project
 **/

const _utility = {
    getWhatsappMessageUrl: function (phonestring, cb) {
        // Returns message url in the form of "https://api.whatsapp.com/send?phone=91232132&text=hi"
        const MESSAGE_API_URL = "https://api.whatsapp.com/send?phone="
        chrome.storage.sync.get({'defaultCountryCode': 1, 'defaultMessage': ''}, function (configs) {
            if (!phonestring) {
                return cb("#NotAPhoneNumber");
            }
            // Format the selection - remove the non-digit characters
            var phone = phonestring.substring(4).replace(/[\s-()]+/g, '');
            // Create the url with the given text and message api url
            if (!phone) {
                return cb("#NotAPhoneNumber");
            } else if (phone.substring(0, 1) !== "+") {
                prefix = configs.defaultCountryCode;
            } else {
                prefix = "";
            }
            phone = phone.replace(/^[+0]/, ''); // strip off leading characters + or 0
            return cb(MESSAGE_API_URL + prefix + phone + "&text=" + encodeURIComponent(configs.defaultMessage));
        });
    }
}
