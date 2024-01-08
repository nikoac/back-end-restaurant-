const { Schema, model } = require('mongoose');
const { calendar } = require('../helpers/utils')

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Este campo es requerido'],
    },
    lastName: {
        type: String,
        required: [true, 'Este campo es requerido'],
    },
    email: {
        type: String,
        required: [true, 'Este campo es requerido'],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Este campo es requerido'],
    },
    role: {
        type: String,
        required: [true, 'Este campo es requerido'],
        enum: ['admin', 'client'],
        default: 'client'
    },
    yearofbirth: {
        type: Number,
        min: [calendar.getFullYear() - 100, 'Año Base'],
        max: [calendar.getFullYear(), 'Año Limite']
    },
    avatar: {
        type: String,
        required: [true, 'Este campo es requerido'],
        default: 'https://i.imgur.com/ThLdImD.png'
    },
    disabled: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true}
)

module.exports = model('user', userSchema);