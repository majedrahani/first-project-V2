import express from "express";
import { studentController } from "./student.controller";

const router = express.Router();

//this route will call controller function
router.post("/create-student", studentController.createStudent);

router.get("/", studentController.getAllStudents);
router.get("/:studentId", studentController.getSingleStudent);

export const studentRouts = router;
