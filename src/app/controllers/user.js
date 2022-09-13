import jwt from "jsonwebtoken";
import { User } from "../models";

const signup = async (req, res) => {
  const { username, email, password, phone } = req.body;
  try {
    const exitUser = await User.findOne({ email }).exec();
    if (exitUser) {
      return res.status(400).json({
        message: "Email đã tồn tại",
      });
    }
    const user = await new User({ username, email, password, phone }).save();
    return res.status(200).json({
      message: "Đăng kí thành công!",
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Fail!",
    });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(400).json({
        message: "Không tồn tại email này!",
      });
    }

    const checkPass = await user.isValidPassword(password);
    if (!checkPass) {
      return res.status(400).json({
        message: "Sai mật khẩu!",
      });
    }

    const token = jwt.sign({ _id: user.id }, "BiBoMart", { expiresIn: "2h" });

    return res.status(200).json({
      message: "Signin Success!",
      token,
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "Fail!",
    });
  }
};

const signout = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({
    message: "Signout Success!",
  });
};

module.exports = {
  signup,
  signin,
  signout,
};
