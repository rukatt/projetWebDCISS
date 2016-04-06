var template = require( "./cabinetMedical.html" );
require( "./cabinetMedical.css" );

module.exports = function(moduleAngular) {
    var proxyNF = require( "./NF.js" )(moduleAngular);

    var controller = function( proxyNF ) {
        // Cette fonction sera appelée pour instancier un cabinet
	var self = this;
	// self.titre = "Blablabla"; 
	console.log(proxyNF);

	// ??????? -> NF.js
	proxyNF.$inject = ["$http"];
	module.exports = function(moduleAngular) {
	    var idService = "proxyNF";
	    moduleAngular.service(idService, proxyNF);
	    return idService;
	}
    }
    controller.$inject = [ proxyNF ]; // Injection de dépendances

    moduleAngular.component( "cabinetMedical", {
        template   : template,
        bindings   : {
	    src    : "@"  
            titre  : "@"
        },
        controller : controller
    });
};

/* Nouveau code que je ne comprends pas
controller(proxyNF) {
    var self = this;
    proxyNF.getData(this.src).then(
	function(cabinetMedicalJS) {self.data = cabinetMedicalJS;}
    );
}
*/

// Pour drag and drop : ngDraggable