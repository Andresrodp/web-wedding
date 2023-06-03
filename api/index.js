import server from "./src/app.js";
import database from "./src/db.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3900;

server.listen(PORT, "0.0.0.0", () => {
    database();
    console.log("Server running on port 3900");
});