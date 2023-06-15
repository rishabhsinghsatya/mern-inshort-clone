import express from "express";
import { getNews } from "../controller/news-controller.js";

const route = express.Router();

// jab news route yahan match hoga to, karna kya hai
route.get("/news", getNews);

export default route;
