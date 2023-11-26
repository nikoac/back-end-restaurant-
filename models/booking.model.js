const { Schema, model } = require('mongoose')
const BookingSchema = new Schema({
    day:{
        type:String,
        required:[true, 'Ingrese el Dia'],
        enum:['lunes','martes','miercoles','jueves','viernes']
    },
    hour:{
        type:Number,
        required:[true, 'Ingrese la Hora'],
        min: [13, 'Los horarios de atencion son de 13 a 22hs'],
        max: [22, 'Los horarios de atencion son de 13 a 22hs']
    },
    
},
{timestamp : true},
)

module.exports = model('booking', BookingSchema)