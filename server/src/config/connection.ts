import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI!)
  .then(() => console.log('✅ MongoDB connected successfully.'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

export default mongoose.connection;
