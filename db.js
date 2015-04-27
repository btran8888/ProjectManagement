module.exports = {
	//'url' : 'mongodb://<dbuser>:<dbpassword>@novus.modulusmongo.net:27017/<dbName>'
<<<<<<< HEAD
	'url' : 'mongodb://localhost/test'
	//'url' = process.env.OPENSHIFT_MONGODB_DB_URL;
}
=======
	//'url' : 'mongodb://localhost/test'
	//'url' = process.env.OPENSHIFT_MONGODB_DB_URL;
	//'url' = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGOHQ_URI || processLAB_URI;
	// Openshift
	'url' = process.env.OPENSHIFT_MONGODB_DB_URL + "/test";
	//heroku
	//'url' = process.env.MONGOHQ_URI + '/test' || processLAB_URI + '/test';
}
>>>>>>> 1a6e4610c309c6c50fc427cf6934082d4eb7c971
