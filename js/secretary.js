require( "./secretary.css" );

(function(){
    /* --------------------- *
     * ---- XML parsing ---- *
     * --------------------- */
    
    // var utils = require( "./utils.js" ); Pourquoi faire ?
    // var proxyNF = require("./proxyNF.js");
    // proxyNF.getData("../data/cabinetInfirmier.xml");
    /* ------------------- *
     * ---- AngularJS ---- *
     * ------------------- */

    var angular = require("angular");
    var angularMaterial = require("angular-material");
    require("angular-material/angular-material.css");

    var modAngular = angular.module( "cabinet", [ angularMaterial ] );
    require("./cabinetMedical/cabinetMedical.js")(modAngular);

}());
