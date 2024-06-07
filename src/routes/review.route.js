import express from "express";
import postReview from "../controllers/postReview.controller.js";
import getReview from "../controllers/getReview.controller.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/post-review", auth, postReview);
router.get("/get-review/:brewId", auth, getReview);

export default router;
