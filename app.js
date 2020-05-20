require("dotenv");
const express = require("express");
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/spaceship", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

const apiRoutes = require('./routes/apiRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")));

app.use('/api', apiRoutes);

app.get('*', (req, res) => {
    res.sendFile("index.html");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error("Not Found");
    error.status = 404;
    next(err);
    //next(createError(404));
  });
  
  // error handler middleware
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error message
    res.status(err.status || 500).json({
      error: {
        message: err.message || "Oops!  Something went wrong!",
      },
    });
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


