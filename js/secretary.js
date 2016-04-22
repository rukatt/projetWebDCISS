require( "./secretary.css" );

(function() {
    
    var angular = require("angular");
    var angularMaterial = require("angular-material");
    require("angular-material/angular-material.css");
    var moduleAngular = angular.module( "cabinet", [ angularMaterial ] );
    
    /* --------------------- *
     * ---- XML parsing ---- *
     * --------------------- */
    
    var utils = require( "./utils.js" ); // Pourquoi faire ?
    var proxyNF = require("./proxyNF.js")(moduleAngular);
    console.log(proxyNF);
    proxyNF.getData("../data/cabinetInfirmier.xml"); // C'est secretary.js qui doit appeler proxy NF ?
                                                     // Je crois pas, et par ailleurs, je déteste le dévelopement Web... 
    /* ------------------- *
     * ---- AngularJS ---- *
     * ------------------- */

    

    require("./cabinetMedical/cabinetMedical.js")(moduleAngular);

})();
