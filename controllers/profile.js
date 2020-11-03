const db = require("../models");

const show = async (req, res) => {
  try {
    const foundProfile = await db.Profile.findById(req.profileId);
    res.status(200).json({ status: 200, data: foundProfile });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

module.exports = {
  show,
};