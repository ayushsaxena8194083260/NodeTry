const express = require("express");
const router = express.Router();
const person = require("../models/person");

router.get("/getPerson", async (req, res) => {
  const data = await person.find();
  console.log("data fetched successfully");
  res.status(200).json(data);
});

router.post("/addPerson", async (req, res) => {
  const newPerson = new person(req.body);
  try {
    await newPerson.save();
    res.send(newPerson);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:work", async (req, res) => {
  try {
    const work = req.params.work;
    if (work == "developer" || work == "designer" || work == "manager") {
      const response = await person.find({ work: work });
      res.status(200).json(response);
    } else {
      res.status(400).send("Invalid work type");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const update = req.body;
    const resp = await person.findByIdAndUpdate(personId, update, {
      new: true,
    });
    if (!resp) {
      return res.status(404).send("invalid person id");
    }
    res.status(200).json(resp);
    await newPerson.save();
    res.send(newPerson);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const update = req.body;
    const resp = await person.findByIdAndDelete(personId, update, {
      new: true,
    });
    if (!resp) {
      return res.status(404).send("invalid person id");
    }
    res.status(200).json(resp);
    await newPerson.save();
    res.send(newPerson);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
