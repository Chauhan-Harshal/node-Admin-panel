import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, default: 'admin' },
  email: String,
  phone: String,
  address: String,
  experience: String,
  otp: String,
  otpExpires: Date,
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', UserSchema);