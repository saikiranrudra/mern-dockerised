const express = require("express");

const app = express();

app.get("/", (req, res) => { res.json({ message: "This is home page" }) });
app.get("/about", (req, res) => { res.json({ message: "This is about page" }) });
app.get("/contact", (req, res) => { res.json({ message: "This is contact page" }) });
app.get("/success", (req, res) => { res.json({ message: "This is success page" }) });

app.listen(3000, () => console.log(`App is listening to port 3000 working ${process.env.NODE_ENV} mode`));