const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require("morgan");
const app = express();
const route = require('./Routes/index');
const cookieParser = require('cookie-parser');
require('dotenv').config();

app.use(cookieParser());
app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"))
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//Connect to database
mongoose
  .connect(process.env.URL_MONGOOSE)
  .then(() => {
    console.log('Kết nối thành công');
  })
  .catch((error) => {
    console.log('Lỗi kết nối', error);
  });
  
//Function route sẽ chứa tất cả các router của app
app.use(express.static('public'));
route(app);

//Start server at PORT 4000
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
