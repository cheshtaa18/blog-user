import express from "express"
import { getPosts, addPost, getPost, deletePost, updatePost } from "../controllers/post.js";

const router = express.Router()
router.get("/:id", getPost); 
router.get("/", getPosts);
router.post("/", addPost)
router.delete("/:id", deletePost)
router.put("/:id", updatePost)

export default router;