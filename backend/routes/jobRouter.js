import express from "express";
const router = express.Router();
import {
  getAllJobs,
  postJob,
  getMyJobs,
  getSingleJob,
  deleteJob,
  updateJob,
} from "../controllers/jobControllers.js";
import { isAuthenticated } from "../middlewares/auth.js";
router.get("/getall", getAllJobs);
router.get("/getmyjob/:id", isAuthenticated, getMyJobs);
router.post("/post", isAuthenticated, postJob);
router.put("/update/:id", isAuthenticated, updateJob);
router.get("/:id", isAuthenticated, getSingleJob);
router.delete("/delete/:id", isAuthenticated, deleteJob);
export default router;

//getAllJobs postJob getMyJobs updateJob deleteJob getSingleJob
//
