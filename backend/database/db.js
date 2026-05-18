require('dotenv').config()
const mongoose=require("mongoose")

exports.connectToDB=async()=>{
    try {
        if(mongoose.connection.readyState===1){
            return // already connected — reuse connection in serverless
        }
        await mongoose.connect(process.env.MONGO_URI,{
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000,
        })
        console.log('connected to DB');
    } catch (error) {
        console.log(error);
        throw error
    }
}
