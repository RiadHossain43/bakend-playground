require("dotenv").config({
    path: process.argv[2]
})
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}. Process id: ${process.pid}`));

// Connect Database


// Init Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use((req, res, next) => {
    console.log(new Date(), req.method, req.url, "\n", req.body)
    next()
})


// Define Routes
app.get("/", (req, res, next) =>
    res.status(200).json({ message: "Active", details: {} })
);
