import "dotenv/config";
import cors from "cors";
import path from "path";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { api } from "./routes/frontPageRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.listen(process.env.PORT, () =>
  console.log(`Server Running on ${process.env.PORT}`)
);

app.use(cors());

app.get("/", (req, res) => {
  res.redirect("https://projectitmart.netlify.app");
});

app.use("/api/v1", api);

app.use("/photos", express.static(path.join(__dirname, "uploads")));
app.get("*", (req, res) => {
  res.redirect("https://projectitmart.netlify.app");
});
