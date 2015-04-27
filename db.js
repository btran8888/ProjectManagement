module.exports = {
	//'url' : 'mongodb://<dbuser>:<dbpassword>@novus.modulusmongo.net:27017/<dbName>'
	//'url' : 'mongodb://localhost/test'
	//'url' = process.env.OPENSHIFT_MONGODB_DB_URL;
	//'url' = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGOHQ_URI || processLAB_URI;
	//'url' = process.env.OPENSHIFT_MONGODB_DB_URL + "/test";
	'url' = process.env.MONGOHQ_URI + '/test' || processLAB_URI + '/test';
}
