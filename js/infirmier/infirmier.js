require("./infirmier.css");
var template = require("./infirmier.html");
var controller = function (proxyNF) {
    // --------------------------
}

module.exports = function(moduleAngular) {
    moduleAngular.component("infirmier", {
	controller : controller,
	template   : template,
	bindings : {data: "<"}
    })
}
