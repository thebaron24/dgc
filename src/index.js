import styles from 'styles';
import * as mdc from 'material-components-web';
var Template = require("./templates/template.handlebars");
var app;

function AppComponent() {
	app = document.createElement('div');
	app.id = "app";
	app.className = "mdc-typography";
	app.innerHTML = Template({});
	document.body.className = "";
	document.body.appendChild(app);

    var drawerEl = document.querySelector('.mdc-persistent-drawer');
    var MDCPersistentDrawer = mdc.drawer.MDCPersistentDrawer;
    var drawer = new MDCPersistentDrawer(drawerEl);
    document.querySelector('.demo-menu').addEventListener('click', function() {
      drawer.open = !drawer.open;
    });
    drawerEl.addEventListener('MDCPersistentDrawer:open', function() {
      console.log('Received MDCPersistentDrawer:open');
    });
    drawerEl.addEventListener('MDCPersistentDrawer:close', function() {
      console.log('Received MDCPersistentDrawer:close');
    });
}

AppComponent();