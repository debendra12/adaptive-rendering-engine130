import express from "express";
import { AppRouter } from "./router";
import { requestLogger } from "./middleware";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(requestLogger);

const router = new AppRouter();
app.use("/", router.getRouter());

app.listen(PORT, () => {
  console.log(
    `Adaptive Rendering Engine running on port ${PORT}`
  );
});