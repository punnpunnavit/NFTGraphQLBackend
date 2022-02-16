import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    
    firstname: {
      type: String,
      required: false,
    },
    lastname: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      select: false,
      required: true,
    },
  },
  { timestamps: true }
);

export = mongoose.model("user", userSchema);
