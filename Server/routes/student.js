import express from "express";
import { Student } from "../models/Student.js";
import bcrypt from "bcrypt";
const router = express.Router();
import { verifyAdmin } from "./auth.js";

router.post("/register", verifyAdmin, async (req, res) => {
  try {
    const { username, password, roll, grade } = req.body;
    const student = await Student.findOne({ username });
    if (student) {
      return res.json({ message: "student is registered" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newstudent = new Student({
      username,
      password: hashPassword,
      roll: roll,
      grade,
    });
    await newstudent.save();
    return res.json({ registered: true });
  } catch (err) {
    return res.json({ message: "Error in registring student" });
  }
});
router.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    return res.json(students);
  } catch (err) {
    return res.json(err);
  }
});

router.get("/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findById({ _id: id });
    return res.json(student);
  } catch (err) {
    return res.json(err);
  }
});
router.put("/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findByIdAndUpdate({ _id: id }, req.body);
    return res.json({ updated: true, student });
  } catch (err) {
    return res.json(err);
  }
});

router.delete("/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findByIdAndDelete({ _id: id });
    return res.json({ deleted: true, student});
  } catch (err) {
    return res.json(err);
  }
});

export { router as studentRouter };
