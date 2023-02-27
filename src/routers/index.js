import { Router } from "express";
import { signUp, getTweet, listTweets, postTweet } from "../controllers/index.js";

const router = Router();

router
    .post("/sign-up", signUp)
    .post("/tweets", postTweet)
    .get("/tweets/:username", getTweet)
    .get("/tweets", listTweets);

export default router;