const express = require("express");
const router = express.Router();
const ownerModule = require("../models/owners.module");


console.log(process.env.NODE_ENV);


if (process.env.NODE_ENV === "development") {
    router.post("/create", async (req, res) => {
        const owner = await ownerModule.find();
        if (owner.length > 0) {
            return res.status(502).send("already existing owner created a new owner...");  // Corrected line
        }
        const { fullname, email, password } = req.body;
        const created = await ownerModule.create({ fullname, email, password });
        res.status(201).send(created);
    });
}


router.get("/", (req, res) => {
  res.send("Hello");
});


module.exports = router;





