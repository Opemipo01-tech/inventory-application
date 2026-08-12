const express = require("express");
const app = express();

const indexRouter = require("./routes/indexroutes");

app.use("/",indexRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Running");
})