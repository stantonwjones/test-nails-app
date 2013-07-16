// What this should look like in the finished product
// global.Nails = something => sets Nails to global scope
// Nails.configure('./config/application.js'); => configure Nails
//		This should build the router and controller from settings in the application.js file
var nails_module = require('../nails-boilerplate/index.js');
global.Nails = nails_module;

application = require('./config/application.js');
Nails.configure( application );
Nails.startServer();
