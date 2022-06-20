'use strict';

const Sequelize = require('sequelize');
const {sequelize} = require('../config/database');

const JobApplication = sequelize.define('JobApplication', {
        jobId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        workerId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        status: {
            type: Sequelize.BOOLEAN,
        }
    }
);

module.exports = {
    JobApplication
};