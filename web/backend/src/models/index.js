'use strict';


// this module is responsible for two things:
// 1. calling the `.associate` method on all our models
// 2. exporting our models (after they've been assoiated)
//
// Any code that needs access to our models (so `app.js`
// and our tests) should import the models from this file,
// not from the individual models files. If you import
// models from the individual file, they won't have had
// `.associate` called on them.

// Any time you create a new model for an app, import it here
const {Worker} = require('./worker');
const {Hire} = require('./hire');
const {Job} = require('./job');
const {JobApplication} = require('./job-application');
const {JobCategory} = require('./job-category');
const {HireComment} = require('./hire-comment');
const {City} = require('./city');
const {Country} = require('./country');
const {WorkerDocument} = require('./worker-document');
const {WorkerExperience} = require('./worker-experience');
const {WorkerLanguage} = require('./worker-language');
const {WorkerComment} = require('./worker-comment');
const {Language} = require('./language');

// All models you want to expose to other modules should go here
const db = {
    Worker,
    Hire,
    Job,
    JobApplication,
    JobCategory,
    HireComment,
	City,
	Country,
	WorkerDocument,
	WorkerExperience,
	WorkerLanguage,
	Language

};

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

// the outside world should only get access to our models
// via this single `db` object.
module.exports = db;
