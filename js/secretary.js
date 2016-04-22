require( "./secretary.css" );

var angular = require("angular");
var angularMaterial = require("angular-material");
require("angular-material/angular-material.css");
var moduleAngular = angular.module( "cabinet", [ angularMaterial ] );

require("./cabinetMedical/cabinetMedical.js")(moduleAngular);
