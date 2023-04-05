import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const { USER_DB, PASS_DB } = process.env;

const database = ()=> {
    mongoose.connect(`mongodb+srv://${USER_DB}:${PASS_DB}@cluster0.canbugo.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DB connected! 🚀")).
catch(err => console.log('Error connecting to MongoDB', err));
}

export default database;