import mongoose, { Schema, mongo } from "mongoose";
const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  status: {
    type: Boolean,
    default: true,
  },
});

export const Project =
  mongoose.models.projects || mongoose.model("projects", ProjectSchema);
