
var mongoose = require('mongoose');

module.exports = mongoose.model('Project',{
	name: String,
        description: String,
	admin: String,
        manager: String,
	workers: [{ workerName: String, hoursWorked: Number}],
	totalHoursWorked: Number, 
        hoursNeeded: Number,
	deadline: Date,
        budget: Number,
        comments: [ {date: Date, username: String, comment: String}]
});

