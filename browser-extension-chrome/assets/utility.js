/**
Common code to be used in the project
**/

//ToDo:We can use better design pattern(s.a facade) here for extending this work to multiple message systems
const _utility = {
  getWhatsappMessageUrl: function(phonestring, cb){
	//Returns message url in the form of "https://api.whatsapp.com/send?phone=91232132&text=hi"
 	const MESSAGE_API_URL="https://api.whatsapp.com/send?phone="
	chrome.storage.sync.get({'defaultCountryCode': 91, 'defaultMessage': ''}, function(configs){
	  	if(!phonestring){
			return cb("#NotAPhoneNumber");
	 	}
	 	//Format the selection - remove the non-digit characters
	 	var phone = phonestring.replace(/\D+/g,'');
		//Create the url with the given text and message api url
	 	if (9 < phone?.length && phone.length < 15) {
	 		if (phone.startsWith(configs.defaultCountryCode) && phone.length < 12) {
				return cb(MESSAGE_API_URL+phone+"&text="+encodeURIComponent(configs.defaultMessage));
	 		} else {
				return cb(MESSAGE_API_URL+configs.defaultCountryCode+phone+"&text="+encodeURIComponent(configs.defaultMessage));
			}
	 	} else {
			return cb("#NotAPhoneNumber");
		}
    });
  }
}