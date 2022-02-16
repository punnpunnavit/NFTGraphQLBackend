import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  firstname: {
    type: Number,
    required: false,
  },
  lastname: {
    type: Number,
    required: false,
  },
  email:{
    type: String,
    required: true,
    unique: true,
    match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email"
    ]
  }
  ,
  username: {
    type: Number,
    required: true,
  },
  password: {
    type: Number,
    select: false,
    required: true,
  },
},{timestamps: true});

export = mongoose.model("user", userSchema);
