import { OrderReview } from "../models";

export const list = async (req, res) => {
  try {
    const orderReviews = await OrderReview.find({}).exec();
    return res.status(200).json(orderReviews);
  } catch (error) {
    return res.status(400).json({
      message: "Không có đơn hàng nào!",
    });
  }
};

export const read = async (req, res) => {
  const filter = { _id: req.params.id };
  try {
    const orderReview = await OrderReview.findOne(filter).exec();
    return res.status(200).json(orderReview);
  } catch (error) {
    return res.status(400).json({
      message: "Không có đơn hàng nào!",
    });
  }
};

export const create = async (req, res) => {
  const doc = req.body;
  try {
    const orderReview = await new OrderReview(doc).save();
    return res.status(200).json(orderReview);
  } catch (error) {
    return res.status(400).json({
      message: "Không thêm được đơn hàng!",
    });
  }
};

export const update = async (req, res) => {
  const filter = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  try {
    const orderReview = await OrderReview.findOneAndUpdate(
      filter,
      doc,
      option
    ).exec();
    return res.status(200).json(orderReview);
  } catch (error) {
    return res.status(400).json({
      message: "Không sửa được đơn hàng!",
    });
  }
};
