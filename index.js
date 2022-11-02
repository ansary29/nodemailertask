const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const app = express();
const dotenv = require("dotenv").config();
const router = require("./routes/routes");


connectDB();



// Body Parser
app.use(express.json());


// Cors
app.use(cors());

// Port
const PORT = process.env.PORT || 5000;

// Router
app.use('/',router);

app.listen(
    PORT , 
    console.log(`server is running on PORT ${PORT}`)
);


// 7nHQZqrZLcog7WMl
// iFDlrzXly9IGS9B1