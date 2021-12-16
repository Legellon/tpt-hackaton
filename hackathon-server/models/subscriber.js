const mongoose = require('mongoose');

const SubscriberSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 255
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Subscriber', SubscriberSchema);