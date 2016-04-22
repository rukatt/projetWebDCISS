// Code transformation http etc.

var proxyNF = function($http) {

    // Récupère le XML sous forme de Promise
    // src = "../data/cabinetInfirmier.xml" ???
    this.getData = function(src) {
	return $http.get(src).then(processData);
    };

    function processData(response) {
	// var xhr = utils.XHR("GET", response).then( function(data) {console.log(data);} );

	// Récupère ce qu'il y a dans les balises XML
	var xmlDoc = new DOMParser();
	xmlDoc = xmlDoc.parseFromString(response.data, "application/xml");
	// juste pour les infirmiers
	var nurseObjects = xmlDoc.querySelector("infirmiers").getElementsByTagName("infirmier");
	console.log(nurseObjects);
	return {
	    infimiers : [],
	    patients  : [],
	    cabinet   : []
	};
    }
};

proxyNF.$inject = ["$http"];

module.exports = function(mod) {
    var id = "proxyNF";
    mod.service(id, proxyNF);
    return id;
};

// TODO : implementer :
// - affecter(patientId, infirmierId)
// - creerPatient(...)
