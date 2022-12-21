import express from "express";
import routerMonedas from "./routes/router.js";
import router from "./routes/router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

