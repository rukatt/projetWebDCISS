var angular         = require( "angular"         ),
    angularMaterial = require( "angular-material");

require("angular-material/angular-material.css");
require( "./secretary.css" );

var cabinetModule = angular.module( "cabinet", [ angularMaterial ] );

// On branche le cabinetModule au service proxyNF
require("proxyNF.js")(cabinetModule);
