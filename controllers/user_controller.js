import User from "../models/user_model.js";

export const userMsg = async (req, res) => {
  try {

    const { name, phone, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(404).json({
        success: false,
        msg: "Something is missing"
      })
    }

    const user = await User.create({
      name,
      phone,
      message
    })


    res.status(200).json({
      success: true,
      user
    })

  } catch (error) {
    console.log(error)
  }
}
