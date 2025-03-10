require('dotenv').config()
const mongoose = require('mongoose');

//Conexion a la base de datos LOCAL en Mongod Compass



// async function conection() {
//     try {
//         await mongoose.connect(process.env.HOST_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log('Conexion exitosa a la base de datos MongoDB Compass db-blog ');
//     } catch (err) {
//         console.error('No se pudo conectar a la base de datos db-blog', err);
//     }
// }





// Conexion a la base de datos en la NUBE  Mongod Atlas

async function conection() {
    try {
        const uri = `mongodb+srv://FaberGomez:${process.env.MONGODB_ATLAS_PASS}@clusterfg.77oh3.mongodb.net/?retryWrites=true&w=majority&appName=ClusterFG`;
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conexion exitosa a la base de datos db-blog en MongoDB Atlas');
    } catch (err) {
        console.error('No se pudo conectar a la base de datos db-blog', err);
    }
}


module.exports = {
    conection
}