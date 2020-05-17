require("dotenv");
const express = require("express");
const app = express();
const path = require('path');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/spaceship", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const apiRoutes = require('./routes/apiRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use('/api', apiRoutes);

app.get('*', (req, res) => {
    res.sendFile("index.html");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


