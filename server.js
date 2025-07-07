//import http from "http";

import app from "./src/app.js";

const PORT = 3000; // Constante fixa de porta

app.listen(PORT, () => {
    console.log("server listening");
})