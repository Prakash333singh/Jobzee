import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title."],
    minLength: [3, "Title must contain at least 3characters !"],
    maxLength: [30, "Title cannot exceed 30 characters !"],
  },
  description: {
    type: String,
    required: [true, "Please provide description."],
    minLength: [30, "description must contain alteast 30 characters"],
    maxLength: [3000, "description cannot exceed 3000 characters"],
  },
  category: {
    type: String,
    required: [true, "Please provide a category"],
  },
  country: {
    type: String,
    required: [true, "Please provide a country name."],
  },
  city: {
    type: String,
    required: [true, "Please provide a city name"],
  },
  location: {
    type: String,
    required: [true, "Please Provide location"],
    minlength: [20, "Location must contain at least 20 characters!"],
  },
  fixedSalary: {
    type: String,
    minLength: [4, "salary must contain atleast 4 digits"],
    maxLength: [9, "salary cannot exceed 9 digits"],
  },
  salaryFrom: {
    type: Number,
    minLength: [4, "salary must contain atleast 4 digits"],
    maxLength: [9, "salary cannot exceed 9 digits"],
  },
  salaryTo: {
    type: Number,
    minLength: [4, "salary must contain atleast 4 digits"],
    maxLength: [9, "salary cannot exceed 9 digits"],
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Job = mongoose.model("Job", jobSchema);
