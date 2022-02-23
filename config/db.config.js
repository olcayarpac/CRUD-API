const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// uri from mongo atlas cloud db
var uri = "mongodb+srv://olcayarpac:olcay98.A@crud-api.0dufv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// Declare a variable named option and assign optional settings
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(() => {
    console.log("Database connection established!");
},
    err => {
        {
            console.log("Error connecting Database instance due to:", err);
        }
    });

module.exports = mongoose;