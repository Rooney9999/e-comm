const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require("./Db/config");
require('./Db/Product');
const User = require("./Db/user");

// Middleware to parse JSON data
app.use(express.json());

// Enable CORS
app.use(cors());

// Register endpoint
app.post('/register', async (req, res) => {
    try {
        let user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        delete result.password;
        res.send(result);  // Corrected to use res instead of resp
    } catch (error) {
        res.status(500).send({ error: "Failed to register user" });
    }
});

// Login endpoint
app.post('/login', async (req, res) => {
    try {
        if (req.body.password && req.body.email) {
            let user = await User.findOne(req.body).select("-password");  // Make sure User.findOne() matches email and password
            if (user) {
                res.send(user);
            } else {
                res.send({ result: "User not found" });
            }
        } else {
            res.send({ result: "Email or password missing" });
        }
    } catch (error) {
        res.status(500).send({ error: "Error during login" });
    }
});
// route for products
app.post('/add-products',async(req,resp)=>{
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);

});
app.get('/products',async ()=>{
    let products =await Product.find();
    if(products.length>0){
        resp.send(products)
    }else{
        resp.send({result:"product not found"})
    }

})


// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
