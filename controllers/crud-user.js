const User = require("../models/user");

exports.createUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    const newUser = await new User({
      firstName,
      lastName,
      email,
    }).save();

    console.log(newUser);

    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error.stack);
    return res.status(500).json({
      ok: false,
      message: `${exception}`,
    });
  }
};
