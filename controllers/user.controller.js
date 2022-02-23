var User = require('../models/user');

exports.findUsers = (req, res) => {
    User.find()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occures while retrieving users.',
            });
        });
};

exports.createNewUser = (req, res) => {
    const userData = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    
    userData
        .save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User.",
            });
        });
};