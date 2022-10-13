import jwt from "jsonwebtoken";
import { User } from "../models";
import middlewares from "../../middlewares";
import passport from "passport";

export const signup = async (req, res) => {
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

// Passport local signin middlewares
export const signin = async (req, res, next) => {
  passport.authenticate("local", (error, user, info) => {
    if (error) {
      return res.status(400).json({
        message: "Fail!",
      });
    }
    const token = jwt.sign({ sub: user }, middlewares.secrets.JWT_SECRENT, {
      expiresIn: middlewares.secrets.JWT_MAX_AGE,
    });

    if (info) {
      return res.status(400).json(info);
    }

    return res.status(200).json({
      message: "Signin Success!",
      token: `Bearer ` + token,
      user: {
        email: user.email,
        username: user.username,
      },
    });
  })(req, res, next);
};

export const signout = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({
    message: "Signout Success!",
  });
};
