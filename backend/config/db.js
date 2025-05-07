const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;


// PORT=8080
// JWT_SECRET=fkjgiufhrviuwgsisgivgsduvgsdaigsiof8sdo
// AES_KEY=12345678901234567890123456789012
// MAIL_USER=karansingh999703@gmail.com
// MAIL_PASS=dtlh batw edfw lqjf

// MONGO_URI=mongodb+srv://ed22b052:pwmwdGs2DbjT89xR@fintech.cztvt.mongodb.net/MinatiAI