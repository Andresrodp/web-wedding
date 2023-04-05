import server from "./src/app.js";
import database from "./src/db.js";


server.listen(3000, () => {
    database();
    console.log("Server running on port 3000");
    });