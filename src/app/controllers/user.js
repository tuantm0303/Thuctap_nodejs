import { User } from "../models";

const signup = async (req, res) => {
  const { username, email, password, phone } = req.body;
  console.log({ username, email, password });
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
      message: "Lỗi rồi anh êi",
    });
  }
};

module.exports = {
  signup,
};
