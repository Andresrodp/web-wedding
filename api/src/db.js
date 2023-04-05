import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const database = ()=> {
    mongoose.connect(`mongodb://localhost:27017/Boda`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DB connected! on Port 27017")).
catch(err => console.log('Error connecting to MongoDB', err));
}

export default database;