const userModule = require('../models/user.model');

exports.createUser = user => userModule.create(user);
