const express = require('express');
const app = express();

app.get('/' , (req,res) => {

res.send("Welcome To node JS");
});

app.listen(process.env.port || 3000,() => {

    console.log("Starting Sever");
});
