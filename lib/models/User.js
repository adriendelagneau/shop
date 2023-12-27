import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      minlength: 6,
      maxlength: 32,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      minlength: 8,
      maxlength: 32, 
      required: true,
    },
    image: {
      type: String,
    },
    provider: {
      type: String,
      maxlength: 32,
      default: 'credentials'
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum : ["user", "admin"],
      default: 'user',
      required: true
    }
  },
  { timestamps: true }
);

//If the User collection does not exist create a new one.
export default mongoose.models.User || mongoose.model("User", userSchema);