import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

import { router } from "./routes/main.js";

const mainRouter = router;

app.use("/api/v1", mainRouter);

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
