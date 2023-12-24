import mongoose, { Schema, mongo } from "mongoose";
const ServiceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

export const Service =
  mongoose.models.service || mongoose.model("service", ServiceSchema);
