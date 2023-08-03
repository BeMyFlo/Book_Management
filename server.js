const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require("morgan");
const app = express();
const authorRoutes = require("./Routes/author")
const bookRoutes = require("./Routes/book")
const accountRouters = require("./Routes/login")
require('dotenv').config();

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"))
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
mongoose
  .connect(process.env.URL_MONGOOSE)
  .then(() => {
    console.log('Kết nối thành công');
  })
  .catch((error) => {
    console.log('Lỗi kết nối', error);
  });
  
  //ROUTES
  app.use(express.static('public'));
  app.use("/v1/author",authorRoutes);
  app.use("/v1/book",bookRoutes);
  app.use("/v1/account",accountRouters);
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });

