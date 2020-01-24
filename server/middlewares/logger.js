const express = require("express");

const logger = (req, res, next) => {
  console.log("Request logged:", req.method, req.path);
  next();
};

module.exports = logger;
