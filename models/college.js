const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollegeSchema = new Schema({
    name: String,
    mascot: String,
    description: String,
});

const College = mongoose.model('College', CollegeSchema);

module.exports = College;
