import { Request, Response, Router } from "express";
import funnyQuotes from "./funnyQuotes.json";
import inspirationalQuotes from "./inpirationalQuotes.json";

// Route "/quotes"
export function getInspirationalQuote(req: Request, res: Response) {
  const numberOfQuotes = funnyQuotes.length;
  const randomSelection = Math.floor(Math.random() * numberOfQuotes - 1);
  const quote = funnyQuotes[randomSelection];
  res.send(quote);
}

// Route "/quotes/funny"
export function getFunnyQuote(req: Request, res: Response) {
  const numberOfQuotes = funnyQuotes.length;
  const randomSelection = Math.floor(Math.random() * numberOfQuotes - 1);
  const quote = funnyQuotes[randomSelection];
  res.send(quote);
}
