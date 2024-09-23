import express from "express";
import bcrypt from "bcrypt";
import { Admin } from "./models/Admin.js";
import "./db.js";

async function AdminAccount() {
  try {
    const amdinCount = await Admin.countDocuments();
    if (amdinCount === 0) {
      const hashPassword = await bcrypt.hash("123456", 5);
      const newAmdin = new Admin({
        username: "ductu",
        password: hashPassword,
      });
      await newAmdin.save();
      console.log("account created");
    } else {
      console.log("account already existed");
    }
  } catch (err) {
    console.log("error");
  }
}

AdminAccount();
