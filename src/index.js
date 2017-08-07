import styles from 'styles';
var componentHandler = require('exports-loader?componentHandler!material-design-lite/material.js')
var Template = require("./templates/template.handlebars");

var app;

function AppComponent() {
	app = document.createElement('div');
	app.id = "app";
	app.innerHTML = Template({});
	document.body.appendChild(app);
	componentHandler.upgradeDom();
}

AppComponent();