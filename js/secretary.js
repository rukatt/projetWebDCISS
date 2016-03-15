require( "./secretary.css" );

(function(){
    var utils = require( "./utils.js" );
    var xhr = utils.XHR("GET", "data/cabinetInfirmier.xml").then( function(data) {console.log(data);} )

    var parser = new DOMParser();
}());
