module.exports = {
	//'url' : 'mongodb://<dbuser>:<dbpassword>@novus.modulusmongo.net:27017/<dbName>'
	//'url' : 'mongodb://localhost/test'
	//'url':  "mongodb://" + process.env.OPENSHIFT_MONGODB_DB_USERNAME + ':' + process.env.OPENSHIFT_MONGODB_DB_PASSWORD + '@' + pocess.env.OPENSHIFT_MONGODB_DB_URL + 'test'
	'url':   process.env.OPENSHIFT_MONGODB_DB_URL + 'nodejs8'
}
