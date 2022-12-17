const mongoose = require("mongoose");
const env = require("dotenv");
env.config();

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.e2xxc52.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("DB Connected Successfully"))
    .catch((err) => console.error("Not Connected", err));
};

module.exports = connectDB;
