// Code transformation http etc.

var proxyNF = function($http) {
    console.log("Le service proxyNF est instancié !");
    this.getData(src) = function() {
	return $http.get(src).then(processData); // renvoie une Promise
    }
}

function processData(resp) {
    // Traitement sur resp.data
    // == traiter XML
    return {
	infirmiers: {},
	patientsRestants: []
    };
}

// implementer aussi :
// - affecter(patientId, infirmierId)
// - creerPatient(...)
