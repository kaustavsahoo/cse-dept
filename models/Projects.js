import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String], // Define an array of strings
    required: true, // You can change this validation rule as needed
  },
  numPeople: {
    type: Number, // Add a field for the number of people required
    required: true, // You can change this validation rule as needed
  },
  userids: {
    type: [mongoose.Schema.Types.ObjectId], // Define an array of user ids
    ref: 'User', // Reference the 'User' model
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference the 'User' model
  },
});

export default mongoose.models.Project || mongoose.model('Project', projectSchema);
