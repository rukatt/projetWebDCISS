var template = require( "./cabinetMedical.html" );
require( "./cabinetMedical.css" );

module.exports = function(moduleAngular) {
    var proxyNF = require( "../proxyNF.js" )(moduleAngular);

    var controller = function( proxyNF ) {
        // Cette fonction sera appelée pour instancier un cabinet
	var self = this;
	proxyNF.getData(this.src).then( function(cabinetMedicalJS) {
	    self.data = cabinetMedicalJS;
	    console.log(self.data);
	});
	var data = proxyNF.getData(this.src);
	console.log(data);

    }
    controller.$inject = [ "proxyNF" ]; // Injection de dépendances

    moduleAngular.component( "cabinetMedical", {
        template   : template,
        bindings   : { 
            titre  : "@"
        },
        controller : controller
    });
};

// Pour drag and drop : ngDraggable
