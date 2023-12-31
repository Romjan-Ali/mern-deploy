const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();

const corsOptions = {
    origin: 'http://localhost:3000' // frontend URI (ReactJS)
}

app.use(express.json());
app.use(cors(corsOptions));

mongoose.connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log(`App is listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
}); 

app.get('/', (req, res) => {
    res.status(201).json({message: "Connected to Backend!"});
});
