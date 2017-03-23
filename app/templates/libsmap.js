var path = require('path');
var lib = path.resolve(process.cwd(),'./node_modules');
var css = path.resolve(process.cwd(),'./app/css/');
var script = path.resolve(process.cwd(),'./app/script/');
var images = path.resolve(process.cwd(),'./app/images/');
const libsmap = {
	css:css,
	script:script,
	images:images,
	jquery:path.resolve(lib,'./jquery/dist/jquery.min.js'),
	bootstrapcss:path.resolve(lib,'./bootstrap/dist/css/bootstrap.min.css'),
	bootstrapjs:path.resolve(lib,'./bootstrap/dist/js/bootstrap.min.js'),
	bootstrapfontEot:path.resolve(lib,'./bootstrap/dist/fonts/glyphicons-halflings-regular.eot'),
	bootstrapfontSvg:path.resolve(lib,'./bootstrap/dist/fonts/glyphicons-halflings-regular.svg'),
	bootstrapfontTtf:path.resolve(lib,'./bootstrap/dist/fonts/glyphicons-halflings-regular.ttf'),
	bootstrapfontWof:path.resolve(lib,'./bootstrap/dist/fonts/glyphicons-halflings-regular.woff'),
	bootstrapfontWof2:path.resolve(lib,'./bootstrap/dist/fonts/glyphicons-halflings-regular.woff2'),
	layout:path.resolve(process.cwd(),'./app/public/layout.js')
}
module.exports = libsmap;
