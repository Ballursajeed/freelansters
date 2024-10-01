const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect('mongodb+srv://thaheraballur:welcome786@cluster0.idoeg.mongodb.net').then(() => {
    console.log('connection successful');
}).catch((err) => console.log('Connection Unsuccessful :('));
