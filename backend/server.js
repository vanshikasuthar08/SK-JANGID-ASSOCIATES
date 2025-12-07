require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

// Models
const Contact = require('./models/Contact');

// Routes Imports
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');

const app = express();

// --- 1. ESSENTIAL MIDDLEWARE (Data Parsers) ---
// Must come BEFORE security checks that read data
app.use(cors());
app.use(express.json({ limit: '10kb' })); 
app.use(express.urlencoded({ extended: true })); // Added this

// --- 2. SECURITY MIDDLEWARE (The Armor) ---

// Set Security Headers
app.use(helmet());

// Prevent Brute Force Attacks
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100 // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Prevent NoSQL Injection
// app.use(mongoSanitize()); // <--- TEMPORARILY DISABLED (Causing Crash)

// Prevent XSS Attacks
// app.use(xss()); // <--- TEMPORARILY DISABLED (Causing Crash)

// --- 3. DATABASE ---
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
connectDB();

// --- 4. ROUTES ---
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

// Contact Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, projectType, message } = req.body;
    const newContact = new Contact({ firstName, lastName, email, phone, projectType, message });
    await newContact.save();
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

app.get('/api/contact', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ submittedAt: -1 });
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

app.get('/', (req, res) => {
  res.send('Secure API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
