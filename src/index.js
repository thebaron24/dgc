import styles from 'styles';
import {MDCPersistentDrawer, MDCPersistentDrawerFoundation, util} from '@material/drawer';

var Template = require("./templates/template.handlebars");
var app;

function AppComponent() {
	app = document.createElement('div');
	app.id = "app";
	app.className = "mdc-typography";
	app.innerHTML = Template({});
	document.body.className = "";
	document.body.appendChild(app);

  let drawerEl = document.querySelector('.mdc-persistent-drawer');
  let menu = document.querySelector('.menu');
  const drawer = new MDCPersistentDrawer(drawerEl);

  // var drawerEl = document.querySelector('.mdc-persistent-drawer');

  // let drawer = new mdc.drawer.MDCPersistentDrawer(drawerEl);
  menu.addEventListener('click', () => drawer.open = !drawer.open);

  //event hooks
  drawerEl.addEventListener('MDCPersistentDrawer:open', function() {
    console.log('Received MDCPersistentDrawer:open');
  });
  drawerEl.addEventListener('MDCPersistentDrawer:close', function() {
    console.log('Received MDCPersistentDrawer:close');
  });
}

AppComponent();