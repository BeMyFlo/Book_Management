const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require("morgan");
const app = express();
const authorRoutes = require("./Routes/author")
require('dotenv').config();

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"))

mongoose
  .connect((process.env.URL_MONGOOSE))
  .then(() => {
    console.log('Kết nối thành công');
  })
  .catch((error) => {
    console.log('Lỗi kết nối', error);
  });
  
  //ROUTES
  app.use("/v1/author",authorRoutes)

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });

