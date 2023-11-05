import mongoose from 'mongoose';

export interface User extends mongoose.Document {
  full_name: string;
  email: string;
  picture_url: string;
}

const UserSchema = new mongoose.Schema<User>({
  full_name: {
    type: String,
    required: [true, 'Please provide a full name for the user.'],
    maxlength: [60, 'Full name cannot be more than 60 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email address for the user.'],
    unique: true, // Ensure email addresses are unique
    maxlength: [100, 'Email address cannot be more than 100 characters'],
  },
  picture_url: {
    type: String,
    required: true,
  },
});

export default mongoose.models.User || mongoose.model<User>('User', UserSchema);