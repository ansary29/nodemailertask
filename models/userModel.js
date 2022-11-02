const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userRegistrationSchema = mongoose.Schema(
  {
    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
  },
  { timestamps: true }
);

userRegistrationSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userRegistrationSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userRegistrationSchema);

module.exports = User;