const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Node.js and Express server is running successfully!"
    });
});

app.get("/about", (req, res) => {
    res.json({
        page: "About",
        technology: ["Node.js", "Express.js"],
        description: "Server development using Node.js and Express.js"
    });
});

app.get("/content", (req, res) => {
    res.json({
        topics: [
            "Node.js",
            "Express.js",
            "HTTP Methods",
            "Server Routing",
            "Client Server Communication"
        ]
    });
});

app.get("/contact", (req, res) => {
    res.json({
        email: "lavpandey2020@gmail.com",
        phone: "9005223813"
    });
});

module.exports.handler = serverless(app);
