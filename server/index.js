const dns = require('dns');
dns.setServers(['1.1.1.1', '8.8.8.8']); // Overrides your network's blocked DNS path

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 1. Added '/portfolio_new' to isolate this database from your old project data safely
const MONGO_URI = 'mongodb+srv://rameshjannani774_db_user:7xeD8mGNq4amCxqn@cluster0.xippkfu.mongodb.net/portfolio_new?retryWrites=true&w=majority';




// 2. Fixed the missing dot before .then()

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB cloud connected successfully'))
  .catch(err => console.error("❌ MongoDB connection failed:", err));

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('ContactForm', ContactSchema);

// 3. Changed '/api/contact' to '/contact' to match your frontend fetch address exactly
app.post('/contact', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(200).send({ message: 'Data saved successfully' });
    }
    catch (err) {
        console.error("Error saving form entry:", err);
        res.status(500).send({ error: 'Failed to save data' });
    }
});

app.listen(5000, () => {
    console.log('🚀 Server is running on port 5000');
});
