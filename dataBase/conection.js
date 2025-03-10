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
        const uri = `mongodb://devfabergomez:${process.env.MONGODB_ATLAS_PASS}/?ssl=true&replicaSet=atlas-p83n4j-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster1`;
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conexion exitosa a la base de datos db-blog en MongoDB Atlas');
    } catch (err) {
        console.error('No se pudo conectar a la base de datos db-blog', err);
    }
}


module.exports = {
    conection
}