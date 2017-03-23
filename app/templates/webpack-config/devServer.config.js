const path = require('path');
module.exports = {
	contentBase: path.resolve(__dirname, './bin/'),
  	compress: true,
  	port: 9000,
  	hot:true,
  	inline: true,
  	//proxy:{"/api":"http://130.10.9.126:8080"}
};