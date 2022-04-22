const express = require("express");
const Model = require("../../models/factory/inspectionSchema");
// const Model = require("../../models/factoryworker/inspectionSchema");

// Routes

// api = GET /api/factory-worker/
const modelget = async (req, res) => {
  try {
    const models = await Model.find();
    return res.status(200).json({
      models,
    });
  } catch (error) {
    console.log({ error: error.message });
    res.status(500).json({ msg: "Sorry, internal server errors" });
  }
};

// api = POST /api/factory-worker/

const modelpost = async (req, res) => {
  const data = req.body;
  console.log({ data });
  const newModelPost = new Model(data);
  try {
    await newModelPost.save();
    return res.status(201).json({
      model: newModelPost,
      msg: "Model has been created successfully.",
    });
  } catch (error) {
    console.log({ error: error.message });
    res.status(500).json({ msg: "Sorry, internal server errors" });
  }
};

// api = PUT /api/factory-worker/

const modelput = async (req, res) => {
  const modelId = req.params.id;
  const data = req.body;
  console.log({ data });
  try {
    await Model.updateOne({ _id: modelId }, { ...data });
    return res.status(201).json({
      msg: "Model has been updated successfully.",
    });
  } catch (error) {
    console.log({ error: error.message });
    res.status(500).json({ msg: "Sorry, internal server errors" });
  }
};

// api = DELETE /api/factory-worker/

const modeldelete = async (req, res) => {
  const modelId = req.params.id;
  try {
    await Model.deleteOne({ _id: modelId });
    return res.status(201).json({
      msg: "Model has been deleted successfully.",
    });
  } catch (error) {
    console.log({ error: error.message });
    res.status(500).json({ msg: "Sorry, internal server errors" });
  }
};

module.exports = {
  modelget,
  modelpost,
  modelput,
  modeldelete,
};
