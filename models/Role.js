/**
 * Created by macintoshhd on 4/16/17.
 */
const mongoose = require('mongoose');

let roleSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});
const Role = mongoose.model('Role', roleSchema);

module.exports = Role;