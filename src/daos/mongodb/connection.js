import mongoose from 'mongoose';

const MONGOURL = 'mongodb://127.0.0.1:27017/coderhouse47345';
const MONGOATLAS ='mongodb+srv://luzscarpati:oufU0an1vInHeUyO@codercluster.pflfwh6.mongodb.net/coderhouse47345?retryWrites=true&w=majority'


export const initMongoDB = async () => {
    try {
        await mongoose.connect(MONGOATLAS);
        console.log('Conectado a la base de datos de MongoDB');
    }catch (error){
        console.log(`ERROR => ${error}`);
    };
};