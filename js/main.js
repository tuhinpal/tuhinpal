/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 */


//My Image Fetch From Github's API
var getJSON = function (url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'json';
	xhr.onload = function () {
		var status = xhr.status;
		if (status == 200) {
			callback(null, xhr.response);
		} else {
			callback(status);
		}
	};
	xhr.send();
};
getJSON('https://api.github.com/users/cachecleanerjeet', function (err, data) {
	if (err != null) {
		console.error(err);
	} else {

		var tuhinimage = `${data.avatar_url}`
		document.getElementById("imagefromgithubapi").src = tuhinimage;
	}
});

/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 */
