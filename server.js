const express = require("express");
const mongoose = require("mongoose");
const APIroutes = require("./routes/api-routes");
const HTMLroutes = require("./routes/html-routes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// routes
app.use(APIroutes);
app.use(HTMLroutes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})