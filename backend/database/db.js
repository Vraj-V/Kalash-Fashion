require('dotenv').config()
const mongoose=require("mongoose")
const dns=require("dns")

// Node.js v25 may fail SRV lookups with local DNS servers.
// Force Google's public DNS to ensure mongodb+srv:// resolves correctly.
dns.setServers(['8.8.8.8','8.8.4.4'])

exports.connectToDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected to DB');
    } catch (error) {
        console.log(error);
    }
}