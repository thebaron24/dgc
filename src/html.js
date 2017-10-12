// <!DOCTYPE html>
// <html>
//   <head>
//   	<title>Diversity Group Consulting</title>
//     <meta charset="UTF-8"> 
//   </head>
//   <body>
//   </body>
// </html>


// Webpack require:
const config = require("./api/config.json");
// var universal = require('./universial.js');

// Export a function / promise / or a string:
// This function has to return a string or promised string:
module.exports = function (templateParams) {

    var html = "</!DOCTYPE html>" +
				"<html>" +
				  "<head>" +
				  	"<title>" + config.site + "</title>" +
				    "<meta charset='UTF-8'>" +
				  "</head>" + 
				  "<body>" +
				  "</body>" +
				"</html>"

  return html;
};