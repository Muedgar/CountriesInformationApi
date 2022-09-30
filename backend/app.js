// require modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// setup basic middlewares
const app = express();

app.use(express.json());
app.use(cors());

// database connection

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
            .then(d => {
                console.log("database connected");
                app.listen(process.env.SERVER_PORT, console.log(`Server running on port http://localhost:${process.env.SERVER_PORT}`));
            })
            .catch(e=>new Error(e));
    } catch (error) {
        console.log(error.message);
    }
}

start();
// setup basic endpoints

app.get('/',async (req,res) => {
    res.status(200).json({status: "server up and running..."});
});