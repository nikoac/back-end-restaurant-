const { Schema, model } = require('mongoose');

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
    age: {
        type: Number,
        min: [16, 'La edad mínima requerida es de 16 años'],
        max: [100, 'La edad máxima requerida es de 100 años']
    },
    disabled: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true}
)

module.exports = model('user', userSchema);