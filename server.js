import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

app.use(express.static(__dirname));

app.listen(8080, () => {
  console.log("🚀 Gauzilla running at http://localhost:8080");
});
