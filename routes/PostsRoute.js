import Express from "express";
import { getAllPosts, getSinglePost } from "../controllers/PostsController";

const PostRoutes = Express.Router();
// GET ALL POSTS
PostRoutes.get('/', getAllPosts)

// GET SINGLE POST
PostRoutes.get('/:id', getSinglePost)




// TODO DELETE POST


export default PostRoutes;