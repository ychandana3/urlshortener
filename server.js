require('dotenv').config();
const express = require('express');
const { StatusCodes } = require('http-status-codes');

const { connectToDB } = require('./config/dbConfig');
const urlRoutes = require('./routes/urlRoutes');

connectToDB();


const app = express();

app.use(express.json());
app.use(urlRoutes);

app.get('/', (req, res) => {
    res.status(StatusCodes.OK).json({
        success: true,
        message: 'server is up and running successfully'
    });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`);
})