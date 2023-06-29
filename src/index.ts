import express from "express";
import router from "./routes/index.routes";

const app = express();

app.use(router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is up and running or port: ${port}`);
  })