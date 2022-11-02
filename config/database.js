const mongoose = require("mongoose");

const connectDB = async () => {
   
try {
    const connection = await mongoose.connect("mongodb+srv://ansary29:moham29@myproject.12hak.mongodb.net/nodemailer?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${connection.connection.host}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
}
};

module.exports = connectDB;
