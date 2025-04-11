require("dotenv").config();

if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
  console.error("❌ Missing environment variables. Check .env file.");
  process.exit(1);
}

module.exports = {
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  port: process.env.PORT || 3000,
};
