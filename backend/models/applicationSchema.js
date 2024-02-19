import mongoose from "mongoose";
import validator from "validator";

const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    minLength: [3, "Name must contain at least 3 characters !"],
    maxLength: [30, "Name connot exceed 30 characters !"],
  },
  email: {
    type: String,
    required: [true, "please enter your Email"],
    validator: [validator.isEmail, "please provide a valid Email!"],
  },
  coverLetter: {
    type: String,
    required: [true, "Please a provide a cover letter"],
  },
  phone: {
    type: Number,
    required: [true, "Please enter your Phone Number !!"],
  },
  address: {
    type: String,
    required: [true, "Please enter your Address"],
  },
  resume: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  applicantID: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: ["Job Seeker"],
      required: true,
    },
  },
  employerID: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: ["Employer"],
      required: true,
    },
  },
});

export const Application = mongoose.model("Application ", applicationSchema);
