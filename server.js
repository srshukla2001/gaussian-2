import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();

// ✅ Add COOP + COEP to ALL responses
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

// ✅ Explicitly serve WASM + JS with correct MIME types
app.use(express.static(__dirname, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith(".wasm")) {
      res.setHeader("Content-Type", "application/wasm");
    }
    if (filePath.endsWith(".js")) {
      res.setHeader("Content-Type", "application/javascript");
    }
  }
}));

app.listen(8080, () => {
  console.log("🚀 Gauzilla running at http://localhost:8080");
});
