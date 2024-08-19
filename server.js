/* const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');


const app = express();
app.use(bodyParser.json());
app.use(cors());



mongoose.connect('mongodb://localhost:27017/myDatabase');


const userSchema = new mongoose.Schema({
    id: { type: String, default: uuidv4 },
    userName: String,
    password: String,
    email: String,
    role: String,
    firstName: String,
    lastName: String,
    org_name: String,
    bio: String,
    address: String,
    phone: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});


const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur API!');
});

app.get('/api/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', err);
        res.status(400).json({ error: 'Erreur lors de l\'enregistrement de l\'utilisateur' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});*/
