const mongoose = require('mongoose')

const dbConnection = async() => {
  try {
    await mongoose.connect(process.env.DB_URL); 
    console.log('Conectado a la DB');
  } catch (error) {
    console.log('Ha ocurrido un problema');
  }
}
dbConnection();