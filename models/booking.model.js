const { Schema, model } = require('mongoose')
const BookingSchema = new Schema({
    day:{
        type:Number,
        required:[true, 'Ingrese el Dia'],
        min: [1, 'Ingrese la fecha deseada'],
        max: [31, 'Ingrese la fecha deseada']
    },
    hour:{
        type:Number,
        required:[true, 'Ingrese la Hora'],
        min: [13, 'Los horarios de atencion son de 13 a 22hs'],
        max: [21, 'Los horarios de atencion son de 13 a 22hs']
    },
    month:{
        type:Number,
        required:[true, 'Ingrese el Mes'],
        min: [1, 'De Enero a Diciembre'],
        max: [12, 'De Enero a Diciembre']
    },
    guests:{
        type:Number,
        required:[true, 'Ingrese la cantidad de Comensales'],
        min: [1, 'El Maximo para una reserva son 15 comensales'],
        max: [15, 'El Maximo para una reserva son 15 comensales']
    }
}, {timestamps:true} 
)

module.exports = model('booking', BookingSchema)