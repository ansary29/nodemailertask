const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const jwtSecret = "1234abcd";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, jwtSecret);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
        res.status(401).send("Unauthorized , A token is required")
    //   throw new Error("Unauthorized, token failed");
    }
  }
  if (!token) {
    res.status(401).send("Unauthorized , A token is required");
    // throw new Error("Unauthorized, no token");
  }
});

module.exports = { protect };