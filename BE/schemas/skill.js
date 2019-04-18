const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Skills = mongoose.model('skills', SkillsSchema);
