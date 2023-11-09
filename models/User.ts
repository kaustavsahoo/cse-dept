import mongoose from "mongoose";

export interface User extends mongoose.Document {
  _id: mongoose.Types.ObjectId; // Include _id field
  name: string;
  email: string;
  image: string;
  bio: string; // New field for bio
  phone: string; // New field for phone
  linkedin: string; // New field for LinkedIn
}

const UserSchema = new mongoose.Schema<User>({
  _id: mongoose.Schema.Types.ObjectId, // Explicitly include _id field
  name: {
    type: String,
    required: [true, "Please provide a full name for the user."],
    maxlength: [60, "Full name cannot be more than 60 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email address for the user."],
    unique: true, // Ensure email addresses are unique
    maxlength: [100, "Email address cannot be more than 100 characters"],
  },
  image: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: "Student in MNIT", // Set the default value to an empty string
  },
  phone: {
    type: String,
    default: "", // Set the default value to an empty string
  },
  linkedin: {
    type: String,
    default: "", // Set the default value to an empty string
  },
});

export default mongoose.models.User || mongoose.model<User>("User", UserSchema);
