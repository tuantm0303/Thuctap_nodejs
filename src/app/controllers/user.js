import jwt from "jsonwebtoken";
import { User } from "../models";
import configs from "../../configs";

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

const signin = async (req, res, next) => {
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

    const token = jwt.sign({ _id: user.id }, configs.secrets.JWT_SECRENT, {
      expiresIn: configs.secrets.JWT_MAX_AGE,
    });

    return res.status(200).json({
      message: "Signin Success!",
      token: `Bearer ` + token,
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

const authorization = async (req, res) => {
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

    return res.status(200).json({
      message: "Successfuly!",
      user: {
        id: req.user._id,
        email: req.user.email,
        username: req.user.username,
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

export default {
  signup,
  signin,
  authorization,
  signout,
};
