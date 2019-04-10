const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Skill = mongoose.model('skill', SkillSchema);
