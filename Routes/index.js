const authorRoutes = require("./author")
const bookRoutes = require("./book")
const accountRouters = require("./login")
function route(app){
    app.use("/v1/author",authorRoutes);
    app.use("/v1/book",bookRoutes);
    app.use("/v1/account",accountRouters);
}
module.exports = route;
