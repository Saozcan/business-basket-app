const BaseService = require('../base-services/base-service')
const {JobApplication} = require('../../models')

class JobApplicationService extends BaseService {
    constructor() {
        super(JobApplication);
    }
}

module.exports = JobApplicationService
