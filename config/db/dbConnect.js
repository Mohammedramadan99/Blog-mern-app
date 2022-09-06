const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Ecommerce:m1964118@cluster0.7n14b.mongodb.net/Blog", // "mongodb://localhost:27017/Blog"
      {
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log("Db is Connected Successfully".green.inverse);
  } catch (error) {
    console.log(`Error ${error.message}`.red.inverse);
  }
};

module.exports = dbConnect;
