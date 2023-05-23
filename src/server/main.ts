import express from "express";
import ViteExpress from "vite-express";
import { getFunnyQuote, getInspirationalQuote } from "./api";

const app = express();

// For simplicity, routes are being declared here.
// Normally, it is best to pull routes out into a proper route files.
app.get("/quotes", getInspirationalQuote);
app.get("/quotes/funny", getFunnyQuote);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening at http://localhost:3000")
);
