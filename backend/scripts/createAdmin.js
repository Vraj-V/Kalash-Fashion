require("dotenv").config();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { connectToDB } = require("../database/db");
const User = require("../models/User");

const email = process.argv[2] || "admin@gmail.com";
const password = process.argv[3] || "Admin@123";

const createOrUpdateAdmin = async () => {
  try {
    await connectToDB();

    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      existingUser.password = hashedPassword;
      existingUser.isAdmin = true;
      existingUser.isVerified = true;
      await existingUser.save();
      console.log("Admin user updated:", email);
    } else {
      await User.create({
        name: "admin",
        email,
        password: hashedPassword,
        isVerified: true,
        isAdmin: true,
      });
      console.log("Admin user created:", email);
    }
  } catch (error) {
    console.error("Error creating/updating admin user:", error);
  } finally {
    await mongoose.disconnect();
  }
};

createOrUpdateAdmin();
