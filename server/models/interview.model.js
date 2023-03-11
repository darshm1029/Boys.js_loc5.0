const mongoose = require('mongoose');


const linkSchema = new mongoose.Schema({
    link: {
        type: String,
        trim: true,
        validate(value) {
            if(!validator.isURL(value)) {
                throw new Error('Invalid website URL.');
            }
        }
    }
});

const interviewSchema = new  mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    link : linkSchema,
    job: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Job'
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Student'
    },
    company : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Company'
    }
}, {
    timestamps: true
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;
