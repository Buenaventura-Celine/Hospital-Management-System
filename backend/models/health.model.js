//need pa rin gamitin yung mongoose library
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//name ng model
const healthSchema = new Schema({
    fullname:{
        type: 'String',
        required: true, 
        trim: true //pangtanggal ng mga whitespace
    },
    temperature:{
        type: 'Number',
        required: true, 
        trim: true //pangtanggal ng mga whitespace
    },
    email:{
        type: 'String',
        required: true, 
        trim: true //pangtanggal ng mga whitespace
    },
    phonenumber:{
        type: 'String',
        required: true, 
        trim: true //pangtanggal ng mga whitespace
    },
}, {
    timestamps: true,
});

//name nung table sa mongodb, second parameter ayun yung isusupply sa table
const Health = mongoose.model('health-management-system', healthSchema) 

module.exports = Health;
