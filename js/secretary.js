require( "./secretary.css" );

(function(){
    /* --------------------- *
     * ---- XML parsing ---- *
     * --------------------- */
    
    var utils = require( "./utils.js" );
    var xhr = utils.XHR("GET", "../data/cabinetInfirmier.xml").then( function(data) {console.log(data);} );

    var xmlDoc = new DOMParser();
    xmlDoc = xmlDoc.parseFromString("../data/cabinetInfirmier.xml", "application/xml");


    /* ------------------- *
     * ---- AngularJS ---- *
     * ------------------- */

    var angular = require("angular");
    var angularMaterial = require("angular-material");
    require("angular-material/angular-material.css");

    var modAngular = angular.module( "cabinet", [ angularMaterial ] );
    require("./cabinetMedical.js")(modAngular);

}());
